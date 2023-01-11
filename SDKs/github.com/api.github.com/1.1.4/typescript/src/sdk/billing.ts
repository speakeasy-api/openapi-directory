import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Billing {
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
   * billingGetGithubActionsBillingGhe - Get GitHub Actions billing for an enterprise
   *
   * Gets the summary of the free and paid GitHub Actions minutes used.
   * 
   * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
   * 
   * The authenticated user must be an enterprise admin.
   *
   * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-enterprise - API method documentation
  **/
  billingGetGithubActionsBillingGhe(
    req: operations.BillingGetGithubActionsBillingGheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetGithubActionsBillingGheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetGithubActionsBillingGheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/settings/billing/actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetGithubActionsBillingGheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.actionsBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetGithubActionsBillingOrg - Get GitHub Actions billing for an organization
   *
   * Gets the summary of the free and paid GitHub Actions minutes used.
   * 
   * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
   * 
   * Access tokens must have the `repo` or `admin:org` scope.
   *
   * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-organization - API method documentation
  **/
  billingGetGithubActionsBillingOrg(
    req: operations.BillingGetGithubActionsBillingOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetGithubActionsBillingOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetGithubActionsBillingOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/settings/billing/actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetGithubActionsBillingOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.actionsBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetGithubActionsBillingUser - Get GitHub Actions billing for a user
   *
   * Gets the summary of the free and paid GitHub Actions minutes used.
   * 
   * Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see "[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)".
   * 
   * Access tokens must have the `user` scope.
   *
   * https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-a-user - API method documentation
  **/
  billingGetGithubActionsBillingUser(
    req: operations.BillingGetGithubActionsBillingUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetGithubActionsBillingUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetGithubActionsBillingUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{username}/settings/billing/actions", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetGithubActionsBillingUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.actionsBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetGithubPackagesBillingGhe - Get GitHub Packages billing for an enterprise
   *
   * Gets the free and paid storage used for GitHub Packages in gigabytes.
   * 
   * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
   * 
   * The authenticated user must be an enterprise admin.
   *
   * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-enterprise - API method documentation
  **/
  billingGetGithubPackagesBillingGhe(
    req: operations.BillingGetGithubPackagesBillingGheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetGithubPackagesBillingGheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetGithubPackagesBillingGheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/settings/billing/packages", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetGithubPackagesBillingGheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.packagesBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetGithubPackagesBillingOrg - Get GitHub Packages billing for an organization
   *
   * Gets the free and paid storage usued for GitHub Packages in gigabytes.
   * 
   * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
   * 
   * Access tokens must have the `repo` or `admin:org` scope.
   *
   * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-organization - API method documentation
  **/
  billingGetGithubPackagesBillingOrg(
    req: operations.BillingGetGithubPackagesBillingOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetGithubPackagesBillingOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetGithubPackagesBillingOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/settings/billing/packages", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetGithubPackagesBillingOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.packagesBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetGithubPackagesBillingUser - Get GitHub Packages billing for a user
   *
   * Gets the free and paid storage used for GitHub Packages in gigabytes.
   * 
   * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
   * 
   * Access tokens must have the `user` scope.
   *
   * https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-a-user - API method documentation
  **/
  billingGetGithubPackagesBillingUser(
    req: operations.BillingGetGithubPackagesBillingUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetGithubPackagesBillingUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetGithubPackagesBillingUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{username}/settings/billing/packages", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetGithubPackagesBillingUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.packagesBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetSharedStorageBillingGhe - Get shared storage billing for an enterprise
   *
   * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
   * 
   * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
   * 
   * The authenticated user must be an enterprise admin.
   *
   * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-enterprise - API method documentation
  **/
  billingGetSharedStorageBillingGhe(
    req: operations.BillingGetSharedStorageBillingGheRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetSharedStorageBillingGheResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetSharedStorageBillingGheRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/enterprises/{enterprise}/settings/billing/shared-storage", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetSharedStorageBillingGheResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.combinedBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetSharedStorageBillingOrg - Get shared storage billing for an organization
   *
   * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
   * 
   * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
   * 
   * Access tokens must have the `repo` or `admin:org` scope.
   *
   * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-organization - API method documentation
  **/
  billingGetSharedStorageBillingOrg(
    req: operations.BillingGetSharedStorageBillingOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetSharedStorageBillingOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetSharedStorageBillingOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/settings/billing/shared-storage", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetSharedStorageBillingOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.combinedBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * billingGetSharedStorageBillingUser - Get shared storage billing for a user
   *
   * Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
   * 
   * Paid minutes only apply to packages stored for private repositories. For more information, see "[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages)."
   * 
   * Access tokens must have the `user` scope.
   *
   * https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-a-user - API method documentation
  **/
  billingGetSharedStorageBillingUser(
    req: operations.BillingGetSharedStorageBillingUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.BillingGetSharedStorageBillingUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.BillingGetSharedStorageBillingUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/users/{username}/settings/billing/shared-storage", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.BillingGetSharedStorageBillingUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.combinedBillingUsage = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
