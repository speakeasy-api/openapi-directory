import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";




export const ServerList = [
	"http://cloudhsmv2.{region}.amazonaws.com",
	"https://cloudhsmv2.{region}.amazonaws.com",
	"http://cloudhsmv2.{region}.amazonaws.com.cn",
	"https://cloudhsmv2.{region}.amazonaws.com.cn",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://docs.aws.amazon.com/cloudhsmv2/ - Amazon Web Services documentation*/
export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * copyBackupToRegion - Copy an AWS CloudHSM cluster backup to a different region.
  **/
  copyBackupToRegion(
    req: operations.CopyBackupToRegionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CopyBackupToRegionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CopyBackupToRegionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.CopyBackupToRegion";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CopyBackupToRegionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.copyBackupToRegionResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createCluster - Creates a new AWS CloudHSM cluster.
  **/
  createCluster(
    req: operations.CreateClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateClusterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.CreateCluster";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateClusterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createClusterResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * createHsm - Creates a new hardware security module (HSM) in the specified AWS CloudHSM cluster.
  **/
  createHsm(
    req: operations.CreateHsmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateHsmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateHsmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.CreateHsm";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CreateHsmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.createHsmResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteBackup - Deletes a specified AWS CloudHSM backup. A backup can be restored up to 7 days after the DeleteBackup request is made. For more information on restoring a backup, see <a>RestoreBackup</a>.
  **/
  deleteBackup(
    req: operations.DeleteBackupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteBackupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteBackupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.DeleteBackup";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteBackupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteBackupResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteCluster - Deletes the specified AWS CloudHSM cluster. Before you can delete a cluster, you must delete all HSMs in the cluster. To see if the cluster contains any HSMs, use <a>DescribeClusters</a>. To delete an HSM, use <a>DeleteHsm</a>.
  **/
  deleteCluster(
    req: operations.DeleteClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteClusterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.DeleteCluster";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteClusterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteClusterResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * deleteHsm - Deletes the specified HSM. To specify an HSM, you can use its identifier (ID), the IP address of the HSM's elastic network interface (ENI), or the ID of the HSM's ENI. You need to specify only one of these values. To find these values, use <a>DescribeClusters</a>.
  **/
  deleteHsm(
    req: operations.DeleteHsmRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteHsmResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteHsmRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.DeleteHsm";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteHsmResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.deleteHsmResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * describeBackups - <p>Gets information about backups of AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the backups. When the response contains only a subset of backups, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeBackups</code> request to get more backups. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more backups to get.</p>
  **/
  describeBackups(
    req: operations.DescribeBackupsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeBackupsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeBackupsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.DescribeBackups";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeBackupsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.describeBackupsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * describeClusters - <p>Gets information about AWS CloudHSM clusters.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the clusters. When the response contains only a subset of clusters, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>DescribeClusters</code> request to get more clusters. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more clusters to get.</p>
  **/
  describeClusters(
    req: operations.DescribeClustersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DescribeClustersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DescribeClustersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.DescribeClusters";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DescribeClustersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.describeClustersResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * initializeCluster - Claims an AWS CloudHSM cluster by submitting the cluster certificate issued by your issuing certificate authority (CA) and the CA's root certificate. Before you can claim a cluster, you must sign the cluster's certificate signing request (CSR) with your issuing CA. To get the cluster's CSR, use <a>DescribeClusters</a>.
  **/
  initializeCluster(
    req: operations.InitializeClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.InitializeClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.InitializeClusterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.InitializeCluster";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.InitializeClusterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.initializeClusterResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * listTags - <p>Gets a list of tags for the specified AWS CloudHSM cluster.</p> <p>This is a paginated operation, which means that each response might contain only a subset of all the tags. When the response contains only a subset of tags, it includes a <code>NextToken</code> value. Use this value in a subsequent <code>ListTags</code> request to get more tags. When you receive a response with no <code>NextToken</code> (or an empty or null value), that means there are no more tags to get.</p>
  **/
  listTags(
    req: operations.ListTagsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ListTagsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ListTagsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.ListTags";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ListTagsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.listTagsResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modifyBackupAttributes - Modifies attributes for AWS CloudHSM backup.
  **/
  modifyBackupAttributes(
    req: operations.ModifyBackupAttributesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyBackupAttributesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyBackupAttributesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModifyBackupAttributesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modifyBackupAttributesResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * modifyCluster - Modifies AWS CloudHSM cluster.
  **/
  modifyCluster(
    req: operations.ModifyClusterRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ModifyClusterResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ModifyClusterRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.ModifyCluster";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ModifyClusterResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.modifyClusterResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * restoreBackup - Restores a specified AWS CloudHSM backup that is in the <code>PENDING_DELETION</code> state. For mor information on deleting a backup, see <a>DeleteBackup</a>.
  **/
  restoreBackup(
    req: operations.RestoreBackupRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.RestoreBackupResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.RestoreBackupRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.RestoreBackup";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.RestoreBackupResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.restoreBackupResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * tagResource - Adds or overwrites one or more tags for the specified AWS CloudHSM cluster.
  **/
  tagResource(
    req: operations.TagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.TagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.TagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.TagResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.TagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.tagResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * untagResource - Removes the specified tag or tags from the specified AWS CloudHSM cluster.
  **/
  untagResource(
    req: operations.UntagResourceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UntagResourceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UntagResourceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/#X-Amz-Target=BaldrApiService.UntagResource";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...utils.getHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.UntagResourceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.untagResourceResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 480:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmAccessDeniedException = httpRes?.data;
            }
            break;
          case httpRes?.status == 481:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInternalFailureException = httpRes?.data;
            }
            break;
          case httpRes?.status == 482:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmInvalidRequestException = httpRes?.data;
            }
            break;
          case httpRes?.status == 483:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmResourceNotFoundException = httpRes?.data;
            }
            break;
          case httpRes?.status == 484:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmServiceException = httpRes?.data;
            }
            break;
          case httpRes?.status == 485:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.cloudHsmTagException = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}