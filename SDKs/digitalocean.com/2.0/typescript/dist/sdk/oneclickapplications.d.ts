import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class OneClickApplications {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * installKubernetes - Install Kubernetes 1-Click Applications
     *
     * To install a Kubernetes 1-Click application on a cluster, send a POST request to
     * `/v2/1-clicks/kubernetes`. The `addon_slugs` and `cluster_uuid` must be provided as body
     * parameter in order to specify which 1-Click application(s) to install. To list all available
     * 1-Click Kubernetes applications, send a request to `/v2/1-clicks?type=kubernetes`.
     *
    **/
    installKubernetes(req: operations.InstallKubernetesRequest, config?: AxiosRequestConfig): Promise<operations.InstallKubernetesResponse>;
    /**
     * list - List 1-Click Applications
     *
     * To list all available 1-Click applications, send a GET request to `/v2/1-clicks`. The `type` may
     * be provided as query paramater in order to restrict results to a certain type of 1-Click, for
     * example: `/v2/1-clicks?type=droplet`. Current supported types are `kubernetes` and `droplet`.
     *
     * The response will be a JSON object with a key called `1_clicks`. This will be set to an array of
     * 1-Click application data, each of which will contain the the slug and type for the 1-Click.
     *
    **/
    list(req: operations.ListRequest, config?: AxiosRequestConfig): Promise<operations.ListResponse>;
}
