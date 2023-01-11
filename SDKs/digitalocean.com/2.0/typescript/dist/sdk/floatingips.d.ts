import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FloatingIPs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createFloatingIp - Create a New Floating IP
     *
     * On creation, a floating IP must be either assigned to a Droplet or reserved to a region.
     * * To create a new floating IP assigned to a Droplet, send a POST
     *   request to `/v2/floating_ips` with the `droplet_id` attribute.
     *
     * * To create a new floating IP reserved to a region, send a POST request to
     *   `/v2/floating_ips` with the `region` attribute.
     *
     * **Note**:  In addition to the standard rate limiting, only 12 floating IPs may be created per 60 seconds.
    **/
    createFloatingIp(req: operations.CreateFloatingIpRequest, config?: AxiosRequestConfig): Promise<operations.CreateFloatingIpResponse>;
    /**
     * deleteFloatingIp - Delete a Floating IPs
     *
     * To delete a floating IP and remove it from your account, send a DELETE request
     * to `/v2/floating_ips/$FLOATING_IP_ADDR`.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    deleteFloatingIp(req: operations.DeleteFloatingIpRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFloatingIpResponse>;
    /**
     * getFloatingIp - Retrieve an Existing Floating IP
     *
     * To show information about a floating IP, send a GET request to `/v2/floating_ips/$FLOATING_IP_ADDR`.
    **/
    getFloatingIp(req: operations.GetFloatingIpRequest, config?: AxiosRequestConfig): Promise<operations.GetFloatingIpResponse>;
    /**
     * listFloatingIps - List All Floating IPs
     *
     * To list all of the floating IPs available on your account, send a GET request to `/v2/floating_ips`.
    **/
    listFloatingIps(config?: AxiosRequestConfig): Promise<operations.ListFloatingIpsResponse>;
}
