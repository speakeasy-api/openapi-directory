import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PublicIpAddresses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getContainersFloatingIps - List available public IP addresses in a space
     *
     * This endpoint returns a list of all public IP addresses that are allocated to a space and not bound to a container. If you want to list all public IP addresses that are allocated to a space, even those that are already bound to a container, use the `all` query parameter (corrsponding IBM Containers command: `cf ic ip list`).
    **/
    getContainersFloatingIps(req: operations.GetContainersFloatingIpsRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersFloatingIpsResponse>;
    /**
     * postContainersFloatingIpsRequest - Request a public IP address for a space
     *
     * This endpoint requests a new public IP address for a space (corresponding IBM Containers command: `cf ic ip request`). The number of public IP addresses depends on the quota that is assigned to the space. If there is not enough quota left to request a new public IP address, you can either contact your organization manager to increase the quota, or unbind an existing IP address from a container by running `cf ic ip unbind <ip_adress> <container>` command, or  calling the `POST /container/{name_or_id}/floating-ips/{ip}/unbind` endpoint.
    **/
    postContainersFloatingIpsRequest(req: operations.PostContainersFloatingIpsRequestRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersFloatingIpsRequestResponse>;
    /**
     * postContainersFloatingIpsIpRelease - Release public IP address
     *
     * This endpoint releases a public IP address from a space (corresponding IBM Containers command: `cf ic ip release <ip_adress>`). The public IP address is no longer allocated to the space. If a container was bound to the IP address, it is automatically unbound.
    **/
    postContainersFloatingIpsIpRelease(req: operations.PostContainersFloatingIpsIpReleaseRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersFloatingIpsIpReleaseResponse>;
    /**
     * postContainersNameOrIdFloatingIpsIpBind - Bind a public IP address to a single container
     *
     * This endpoint binds an available public IP address to a single container (corresponding IBM Containers command: `cf ic ip bind <ip_adress> <container>`). After a container is bound to a public IP address, it can be accessed at `https://<public_ip_adress>:<public_port>`.
    **/
    postContainersNameOrIdFloatingIpsIpBind(req: operations.PostContainersNameOrIdFloatingIpsIpBindRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdFloatingIpsIpBindResponse>;
    /**
     * postContainersNameOrIdFloatingIpsIpUnbind - Unbind a public IP address from a container
     *
     * This endpoint unbinds a public IP address from a container (corresponding IBM Containers command: `cf ic ip unbind <ip_adress> <container>`). The container that is unbound from the IP address will not be accessible from the internet anymore. The public IP address will be further allocated to the space and can be used to be bound to other containers.
    **/
    postContainersNameOrIdFloatingIpsIpUnbind(req: operations.PostContainersNameOrIdFloatingIpsIpUnbindRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdFloatingIpsIpUnbindResponse>;
}
