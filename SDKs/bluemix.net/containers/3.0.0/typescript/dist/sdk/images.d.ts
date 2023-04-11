import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Images {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a Docker image.
     *
     * @remarks
     * Remove a Docker image from the private Bluemix registry that is identified by the image ID (corresponding IBM Containers command: `cf ic rmi <image>`).
     */
    deleteImagesId(req: operations.DeleteImagesIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagesIdResponse>;
    /**
     * List all Docker images that are available in your private Bluemix registry.
     *
     * @remarks
     * This endpoint returns a list of all available Docker images in a private Bluemix registry (corresponding IBM Containers command: `cf ic images`.
     */
    getImagesJson(req: operations.GetImagesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesJsonResponse>;
    /**
     * Inspect a Docker image in private Bluemix registry
     *
     * @remarks
     * This endpoint returns detailed information about a Docker image that is stored in the private Bluemix registry of an organization (corresponding IBM Containers command: `cf ic inspect <image_name_or_id>`).
     */
    getImagesNameOrIdJson(req: operations.GetImagesNameOrIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetImagesNameOrIdJsonResponse>;
    /**
     * Build a Docker image from a Dockerfile
     *
     * @remarks
     * This API builds a new container image from a Dockerfile that is stored on your local machine and pushes the image to the private Bluemix registry (corresponding IBM Containers command: `cf ic build`).
     *
     *  To push an image to your Bluemix registry, a namespace must be set for the organization. Run `cf ic namespace get` or call the `GET /registry/namespaces` API to check if a namespace is already set. If not, run `cf ic namespace set NAMESPACE` or call the `PUT /registry/namespaces/{namespace}` API to set a namespace for your organization.
     */
    postBuild(req: operations.PostBuildRequest, config?: AxiosRequestConfig): Promise<operations.PostBuildResponse>;
}
