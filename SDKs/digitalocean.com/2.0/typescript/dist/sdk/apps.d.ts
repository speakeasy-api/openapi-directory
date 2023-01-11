import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Apps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createApp - Create a New App
     *
     * Create a new app by submitting an app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://www.digitalocean.com/docs/app-platform/references/app-specification-reference/).
    **/
    createApp(req: operations.CreateAppRequest, config?: AxiosRequestConfig): Promise<operations.CreateAppResponse>;
    /**
     * createDeployment - Create an App Deployment
     *
     * Creating an app deployment will pull the latest changes from your repository and schedule a new deployment for your app.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * deleteApp - Delete an App
     *
     * Delete an existing app. Once deleted, all active deployments will be permanently shut down and the app deleted. If needed, be sure to back up your app specification so that you may re-create it at a later time.
    **/
    deleteApp(req: operations.DeleteAppRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAppResponse>;
    /**
     * getApp - Retrieve an Existing App
     *
     * Retrieve details about an existing app by either its ID or name. To retrieve an app by its name, do not include an ID in the request path. Information about the current active deployment as well as any in progress ones will also be included in the response.
    **/
    getApp(req: operations.GetAppRequest, config?: AxiosRequestConfig): Promise<operations.GetAppResponse>;
    /**
     * getDeployment - Retrieve an App Deployment
     *
     * Retrieve information about an app deployment.
    **/
    getDeployment(req: operations.GetDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentResponse>;
    /**
     * getInstanceSize - Retrieve an Instance Size
     *
     * Retrieve information about a specific instance size for `service`, `worker`, and `job` components.
    **/
    getInstanceSize(req: operations.GetInstanceSizeRequest, config?: AxiosRequestConfig): Promise<operations.GetInstanceSizeResponse>;
    /**
     * getLogs - Retrieve Deployment Logs
     *
     * Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.
    **/
    getLogs(req: operations.GetLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogsResponse>;
    /**
     * getLogsAggregate - Retrieve Aggregate Deployment Logs
     *
     * Retrieve the logs of a past, in-progress, or active deployment. If a component name is specified, the logs will be limited to only that component. The response will include links to either real-time logs of an in-progress or active deployment or archived logs of a past deployment.
    **/
    getLogsAggregate(req: operations.GetLogsAggregateRequest, config?: AxiosRequestConfig): Promise<operations.GetLogsAggregateResponse>;
    /**
     * getTier - Retrieve an App Tier
     *
     * Retrieve information about a specific app tier.
    **/
    getTier(req: operations.GetTierRequest, config?: AxiosRequestConfig): Promise<operations.GetTierResponse>;
    /**
     * listApps - List All Apps
     *
     * List all apps on your account. Information about the current active deployment as well as any in progress ones will also be included for each app.
    **/
    listApps(req: operations.ListAppsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppsResponse>;
    /**
     * listDeployments - List App Deployments
     *
     * List all deployments of an app.
    **/
    listDeployments(req: operations.ListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentsResponse>;
    /**
     * listInstanceSizes - List Instance Sizes
     *
     * List all instance sizes for `service`, `worker`, and `job` components.
    **/
    listInstanceSizes(config?: AxiosRequestConfig): Promise<operations.ListInstanceSizesResponse>;
    /**
     * listRegions - List App Regions
     *
     * List all regions supported by App Platform.
    **/
    listRegions(config?: AxiosRequestConfig): Promise<operations.ListRegionsResponse>;
    /**
     * listTiers - List App Tiers
     *
     * List all app tiers.
    **/
    listTiers(config?: AxiosRequestConfig): Promise<operations.ListTiersResponse>;
    /**
     * postCancelDeployment - Cancel a Deployment
     *
     * Immediately cancel an in-progress deployment.
    **/
    postCancelDeployment(req: operations.PostCancelDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.PostCancelDeploymentResponse>;
    /**
     * updateApp - Update an App
     *
     * Update an existing app by submitting a new app specification. For documentation on app specifications (`AppSpec` objects), please refer to [the product documentation](https://www.digitalocean.com/docs/app-platform/references/app-specification-reference/).
    **/
    updateApp(req: operations.UpdateAppRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAppResponse>;
    /**
     * validateAppSpec - Propose an App Spec
     *
     * To propose and validate a spec for a new or existing app, send a PUT request to the `/v2/apps/propose` endpoint. The request returns some information about the proposed app, including app cost and upgrade cost. If an existing app ID is specified, the app spec is treated as a proposed update to the existing app.
    **/
    validateAppSpec(req: operations.ValidateAppSpecRequest, config?: AxiosRequestConfig): Promise<operations.ValidateAppSpecResponse>;
}
