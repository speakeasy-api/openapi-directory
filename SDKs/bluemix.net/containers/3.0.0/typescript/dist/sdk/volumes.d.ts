import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Volumes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a volume
     *
     * @remarks
     * Delete a volume with a given name from a space (corresponding IBM Containers command: `cf ic volume rm VOLNAME`). To delete a volume, all mounted containers must be unmounted first. After the volume is deleted, the data that are stored in the volume are lost.
     */
    deleteVolumesName(req: operations.DeleteVolumesNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumesNameResponse>;
    /**
     * List all volumes for a space
     *
     * @remarks
     * This endpoint returns a list of all volumes that are available in the given space (corresponding IBM Containers command: `cf ic volume list`).
     */
    getVolumesJson(req: operations.GetVolumesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesJsonResponse>;
    /**
     * Retrieve detailed information about a volume.
     *
     * @remarks
     * Retrieve a detailed list of information about a volume that is identified by the volume name (corresponding IBM Containers command: `cf ic volume inspect VOLNAME`).
     */
    getVolumesNameJson(req: operations.GetVolumesNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesNameJsonResponse>;
    /**
     * Create a volume in a space
     *
     * @remarks
     * This endpoints creates a new volume in your space (corresponding IBM Containers command: `cf ic volume create VOLNAME`). A volume is used to persist and access app data between container restarts. Volumes are hosted on file shares that define the available actual storage in Bluemix and the number of input and output transactions per second (IOPS).
     *
     *  After you have created a volume, you must mount it to a container by using the `--volume` option in the `cf ic run` (single containers) or `cf ic group create` (container groups) command. You can also define the volume as part of the HTTP body and send a request to the `POST /containers/create` (single containers) or `POST /containers/groups` (container groups) endpoints.
     *
     *  Note: If you mount multiple containers in a space to the same volume, they share the data in the volume and can access them anytime. When a container is deleted, the associated volume is not removed.
     */
    postVolumesCreate(req: operations.PostVolumesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesCreateResponse>;
    /**
     * Share a volume with another space
     *
     * @remarks
     * This endpoint provisions an existing volume that was created in one space to another space within the same organization. Single containers and container groups in each space can read and write to the shared volume. The volume remains owned by the original space it was created in, including management and billing. For example, the volume can be deleted from the original space only.
     */
    postVolumesName(req: operations.PostVolumesNameRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesNameResponse>;
}
