import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class SingleContainers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Remove a single container
     *
     * @remarks
     * Remove a single container that is identified by container ID or name from a space (corresponding IBM Containers command: `cf ic delete <container>`). The container must be stopped before it can be deleted, unless the `force` query parameter is set to true.
     */
    deleteContainersNameOrId(req: operations.DeleteContainersNameOrIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainersNameOrIdResponse>;
    /**
     * List single containers in a space.
     *
     * @remarks
     * This endpoint returns a list of all single containers in a space that are currently in a running state (corresponding IBM Containers command: `cf ic ps`). To list all single containers independent of their current state, set the `all` query parameter to true.
     */
    getContainersJson(req: operations.GetContainersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersJsonResponse>;
    /**
     * List the current state of a container.
     *
     * @remarks
     * This endpoint returns the current state of a container. This state can either be a transient state, such as BUILDING and NETWORKING, or a non-transient state, such as RUNNING, SHUTDOWN, CRASHED, or SUSPENDED.
     */
    getContainersIdStatus(req: operations.GetContainersIdStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersIdStatusResponse>;
    /**
     * Inspect a single container
     *
     * @remarks
     * This endpoint retrieves detailed information about a single container (corresponding IBM Containers command: `cf ic inspect <container>`).
     */
    getContainersNameOrIdJson(req: operations.GetContainersNameOrIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetContainersNameOrIdJsonResponse>;
    /**
     * Create and start a single container
     *
     * @remarks
     * This endpoint creates and starts a single container in your space based on the Docker image that is specified in the Image field of the request json. A single container in IBM Containers is similar to a container that you create in your local Docker environment. Single containers are a good way to start with IBM Containers and to learn about how containers work in the IBM Cloud and the features that IBM Containers provides. They are also recommended when you want to run simple app tests or during the development process of an app.
     *
     *  In the Docker API there are two separate APIs to create and start a container. However in IBM Containers a container is created and started in a single API call. Therefore, this API merges parameters from the Docker API to create and start container.
     *
     *  To create a container with IBM Containers, you must at least define the image that the container is based on.
     *
     * - Image: You must include the full path to the image in your private Bluemix registry in the format: `registry.ng.bluemix.net/<namespace>/<image>`.
     */
    postContainersCreate(req: operations.PostContainersCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersCreateResponse>;
    /**
     * Pause a single container
     *
     * @remarks
     * Pause all processes in a running single container with a given container ID or name (corresponding IBM Containers command: `cf ic pause <container>`).
     */
    postContainersNameOrIdPause(req: operations.PostContainersNameOrIdPauseRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdPauseResponse>;
    /**
     * Rename a single container
     *
     * @remarks
     * Change the current name of an existing single container that is identified by the container ID or name (corresponding IBM Containers command: `cf ic rename <old_name> <new_name>`).
     */
    postContainersNameOrIdRename(req: operations.PostContainersNameOrIdRenameRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdRenameResponse>;
    /**
     * Restart a single container
     *
     * @remarks
     * Restart a container with a given container ID or name (corresponding IBM Containers command: `cf ic restart <container>`).
     */
    postContainersNameOrIdRestart(req: operations.PostContainersNameOrIdRestartRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdRestartResponse>;
    /**
     * Start a single container
     *
     * @remarks
     * Start a single container with a given container name or ID (corresponding IBM Containers command: `cf ic start <container>`).
     */
    postContainersNameOrIdStart(req: operations.PostContainersNameOrIdStartRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdStartResponse>;
    /**
     * Stop a single container
     *
     * @remarks
     * Stop a single container with a given container name or ID (corresponding IBM Containers command: `cf ic stop <container>`).
     */
    postContainersNameOrIdStop(req: operations.PostContainersNameOrIdStopRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdStopResponse>;
    /**
     * Unpause a single container
     *
     * @remarks
     * Unpause all processes that are currently stopped inside a single containers with a given container ID or name (corresponding IBM Containers command: `cf ic unpause <container>`).
     */
    postContainersNameOrIdUnpause(req: operations.PostContainersNameOrIdUnpauseRequest, config?: AxiosRequestConfig): Promise<operations.PostContainersNameOrIdUnpauseResponse>;
}
