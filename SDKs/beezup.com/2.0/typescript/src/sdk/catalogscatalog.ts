import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class CatalogsCatalog {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * catalogStoreIndex - Get the index of the catalog API for this store
   *
   * The operation will give you all the operations you will be able to do on this store for this API.
  **/
  catalogStoreIndex(
    req: operations.CatalogStoreIndexRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogStoreIndexResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogStoreIndexRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogStoreIndexResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogStoreIndex = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogChangeCatalogColumnUserName - Change Catalog Column User Name
  **/
  catalogChangeCatalogColumnUserName(
    req: operations.CatalogChangeCatalogColumnUserNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogChangeCatalogColumnUserNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogChangeCatalogColumnUserNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/catalogColumns/{columnId}/rename", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CatalogChangeCatalogColumnUserNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.importAlreadyInProgressResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogChangeCustomColumnExpression - Change custom column expression
  **/
  catalogChangeCustomColumnExpression(
    req: operations.CatalogChangeCustomColumnExpressionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogChangeCustomColumnExpressionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogChangeCustomColumnExpressionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns/{columnId}/expression", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogChangeCustomColumnExpressionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.importAlreadyInProgressResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogChangeCustomColumnUserName - Change Custom Column User Name
  **/
  catalogChangeCustomColumnUserName(
    req: operations.CatalogChangeCustomColumnUserNameRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogChangeCustomColumnUserNameResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogChangeCustomColumnUserNameRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns/{columnId}/rename", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CatalogChangeCustomColumnUserNameResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.importAlreadyInProgressResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogComputeExpression - Compute the expression for this catalog.
  **/
  catalogComputeExpression(
    req: operations.CatalogComputeExpressionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogComputeExpressionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogComputeExpressionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns/computeExpression", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CatalogComputeExpressionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogComputeExpression200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogComputeExpression400ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogDeleteCustomColumn - Delete custom column
  **/
  catalogDeleteCustomColumn(
    req: operations.CatalogDeleteCustomColumnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogDeleteCustomColumnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogDeleteCustomColumnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns/{columnId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogDeleteCustomColumnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetCatalogColumns - Get catalog column list
  **/
  catalogGetCatalogColumns(
    req: operations.CatalogGetCatalogColumnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetCatalogColumnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetCatalogColumnsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/catalogColumns", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetCatalogColumnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogColumnList = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetCategories - Get category list
  **/
  catalogGetCategories(
    req: operations.CatalogGetCategoriesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetCategoriesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetCategoriesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/categories", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...utils.getHeadersFromRequest(req.headers), ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "get",
      headers: headers,
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetCategoriesResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.categoryList = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetCustomColumnExpression - Get the encrypted custom column expression
  **/
  catalogGetCustomColumnExpression(
    req: operations.CatalogGetCustomColumnExpressionRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetCustomColumnExpressionResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetCustomColumnExpressionRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns/{columnId}/expression", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetCustomColumnExpressionResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogGetCustomColumnExpression200ApplicationJSONString = JSON.stringify(httpRes?.data);
            }
            break;
          case httpRes?.status == 404:
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetCustomColumns - Get custom column list
  **/
  catalogGetCustomColumns(
    req: operations.CatalogGetCustomColumnsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetCustomColumnsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetCustomColumnsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetCustomColumnsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.customColumnList = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetProductByProductId - Get product by ProductId
  **/
  catalogGetProductByProductId(
    req: operations.CatalogGetProductByProductIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetProductByProductIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetProductByProductIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/products/{productId}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetProductByProductIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.product = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetProductBySku - Get product by Sku
  **/
  catalogGetProductBySku(
    req: operations.CatalogGetProductBySkuRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetProductBySkuResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetProductBySkuRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/products", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetProductBySkuResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.product = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetProducts - Get product list
  **/
  catalogGetProducts(
    req: operations.CatalogGetProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/products/list", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.CatalogGetProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.productList = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogGetRandomProducts - Get random product list
   *
   * We will return 10 products randomly selected with all product values
  **/
  catalogGetRandomProducts(
    req: operations.CatalogGetRandomProductsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogGetRandomProductsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogGetRandomProductsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/products/random", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogGetRandomProductsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.randomProductList = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * catalogSaveCustomColumn - Create or replace a custom column
  **/
  catalogSaveCustomColumn(
    req: operations.CatalogSaveCustomColumnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CatalogSaveCustomColumnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CatalogSaveCustomColumnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/customColumns/{columnId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CatalogSaveCustomColumnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 409:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.importAlreadyInProgressResponse = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * importationGetManualUpdateLastInputConfig - Get the last input configuration
  **/
  importationGetManualUpdateLastInputConfig(
    req: operations.ImportationGetManualUpdateLastInputConfigRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ImportationGetManualUpdateLastInputConfigResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ImportationGetManualUpdateLastInputConfigRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/v2/user/catalogs/{storeId}/inputConfiguration", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.ImportationGetManualUpdateLastInputConfigResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.lastManualImportInputConfiguration = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
          default:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.beezUPCommonErrorResponseMessage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
