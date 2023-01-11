import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloatingIpActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFloatingIpAction - Retrieve an Existing Floating IP Action
     *
     * To retrieve the status of a floating IP action, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions/$ACTION_ID`.
    **/
    getFloatingIpAction(req: operations.GetFloatingIpActionRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpActionResponse>;
    /**
     * listFloatingIpActions - List All Actions for a Floating IP
     *
     * To retrieve all actions that have been executed on a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP/actions`.
    **/
    listFloatingIpActions(req: operations.ListFloatingIpActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFloatingIpActionsResponse>;
    /**
     * postFloatingIpAction - Initiate a Floating IP Action
     *
     * To initiate an action on a floating IP send a POST request to
     * `/v2/floating_ips/$FLOATING_IP/actions`. In the JSON body to the request,
     * set the `type` attribute to on of the supported action types:
     *
     * | Action     | Details
     * |------------|--------
     * | `assign`   | Assigns a floating IP to a Droplet
     * | `unassign` | Unassign a floating IP from a Droplet
     *
    **/
    postFloatingIpAction(req: operations.PostFloatingIpActionRequest, config?: AxiosRequestConfig): Promise<operations.PostFloatingIpActionResponse>;
}
