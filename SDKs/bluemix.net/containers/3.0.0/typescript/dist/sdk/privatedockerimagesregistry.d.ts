import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PrivateDockerImagesRegistry {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve the namespace of an organization.
     *
     * @remarks
     * This endpoint retrieves the namespace that was set for the organization that owns the current space (corresponding IBM Containers command: `cf ic namespace get`).
     */
    getRegistryNamespaces(req: operations.GetRegistryNamespacesRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryNamespacesResponse>;
    /**
     * Check the availability of a namespace
     *
     * @remarks
     * This endpoint checks whether a namespace is available in Bluemix and can be used to set up the private Docker images registry for an organization. When a HTTP code `201 Ok` is returned, the namespace is already assigned to another organization in Bluemix and cannot be used. When a HTTP code `404 Not found` is returned, the namespace can be used for your organization.
     *
     *  Consider the following rules when choosing a namespace for your organization:
     *
     * - Every organization can have one namespace at a time only
     * - The namespace must be unique in Bluemix.
     * - The namespace can be 4-30 characters long.
     * - The namespace must start with at least one letter or number.
     * - The namespace can only contain lowercase letters, numbers or underscores (_).
     */
    getRegistryNamespacesNamespace(req: operations.GetRegistryNamespacesNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryNamespacesNamespaceResponse>;
    /**
     * Set a namespace for your private Bluemix registry.
     *
     * @remarks
     * Set up your own Docker images registry in Bluemix by defining a namespace for your organization (corresponding IBM Containers command: `cf ic namespace set <namespace>`). The namespace is used to generate a unique URL to your private Bluemix registry. In your private registry you store all Docker images that you want to share across your organization. To create a container from an image, you must first push the image to your registry.
     *
     *  The namespace cannot be changed after is has been set. Consider the following rules to choose a namespace for your organization:
     *
     * - Every organization can have one namespace at a time only
     * - The namespace must be unique in Bluemix.
     * - The namespace can be 4-30 characters long.
     * - The namespace must start with at least one letter or number.
     * - The namespace can only contain lowercase letters, numbers or underscores (_).
     */
    putRegistryNamespacesNamespace(req: operations.PutRegistryNamespacesNamespaceRequest, config?: AxiosRequestConfig): Promise<operations.PutRegistryNamespacesNamespaceResponse>;
}
