import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ContainerGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteContainersGroupsNameOrId - Stop and delete all container instances in a container group.
     *
     * Stops and deletes the container instances that run in a container group (corresponding IBM Containers command: `cf ic group rm <group_name>`). When you delete a container group, all floating private IP addresses are released.
    **/
    deleteContainersGroupsNameOrId(req: operations.DeleteContainersGroupsNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainersGroupsNameOrIdResponse>;
    /**
     * getContainersGroups - List all container groups in a space
     *
     * This endpoint returns a list of all container groups in a space independent of their current state. (corresponding IBM Containers command: `cf ic group list`).
    **/
    getContainersGroups(req: operations.GetContainersGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersGroupsResponse>;
    /**
     * getContainersGroupsNameOrId - Inspect a container group.
     *
     * This endpoint retrieves detailed information about a container group with a given name (corresponding IBM Containers command: `cf ic group inspect GROUP`).
    **/
    getContainersGroupsNameOrId(req: operations.GetContainersGroupsNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersGroupsNameOrIdResponse>;
    /**
     * patchContainersGroupsNameOrId - Update a container group.
     *
     * Update the number of container instances that run in a container group (corresponding IBM Containers command: `cf ic group update <option> <group>`).
     *
     * Note: You can run only one update at a time.
     *
     *  The desired number is the number of container instances that you require. It must be within the current limits of Max and Min. To increase the number of desired container instances above the Max value, you must first execute an update on the Max value. Once this update is completed, you can increase the desired number of container instances.
    **/
    patchContainersGroupsNameOrId(req: operations.PatchContainersGroupsNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchContainersGroupsNameOrIdResponse>;
    /**
     * postContainersGroups - Create and start a container group.
     *
     * This endpoint creates and starts a new container group in your space. A container group consists of two or more single containers that are all created from the same container image and as a consequence are configured in the same way. Container groups offer different options at no cost to make your app highly available, such as in-built load balancing, auto-recovery of unhealthy container instances, and auto-scaling of container instances based on CPU and memory usage.
     *
     * To create a container group with IBM Containers, you must at least define a container group name and the image that the container group is based on. Required attributes:
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * - Name: The container group name must start with a letter and then can include uppercase letters, lowercase letters, numbers, periods (.), underscores (_), or hyphens (-).
     * - Image: You must include the full path to the image in your private Bluemix registry in the format:`registry.ng.bluemix.net/<namespace>/<image>`.
    **/
    postContainersGroups(req: operations.PostContainersGroupsRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersGroupsResponse>;
    /**
     * postContainersGroupsNameOrIdMaproute - Map a public route to a container group.
     *
     * If you want your container group to be accessible from the Internet, you need to expose a public port and map a public route to it (corresponding IBM Containers command: `cf ic route map -n <host> -d <domain> <group>`). Every route consists of the host name and domain.
    **/
    postContainersGroupsNameOrIdMaproute(req: operations.PostContainersGroupsNameOrIdMaprouteRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersGroupsNameOrIdMaprouteResponse>;
    /**
     * postContainersGroupsNameOrIdUnmaproute - Unmap a public route from a container group
     *
     * This endpoint unmaps a public route from a container group (corresponding IBM Containers command: `cf ic route unmap -n <host> -d <domain> <group>`). If no other public route is mapped to the container group, then the container group is no longer available from the internet.
     *
     *  When you unmap a route from a container group, the route is not deleted and can be mapped to other container groups.
    **/
    postContainersGroupsNameOrIdUnmaproute(req: operations.PostContainersGroupsNameOrIdUnmaprouteRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersGroupsNameOrIdUnmaprouteResponse>;
}
