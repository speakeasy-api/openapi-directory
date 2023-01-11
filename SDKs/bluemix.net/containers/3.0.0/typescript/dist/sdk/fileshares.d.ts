import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FileShares {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteVolumesFsName - Delete a file share
     *
     * This endpoint deletes a file share from a space (corresponding IBM Containers command: `cf ic volume fs-rm FSNAME`).
     *
     *  Before you can delete a file share, all mounted volumes must be deleted first. To delete a volume, run `cf ic volume rm VOLNAME` or call the `DELETE /volumes/{name}` API endpoint.
     *
     *  **Note:** To delete a file share you must have been granted organization developer rights.
    **/
    deleteVolumesFsName(req: operations.DeleteVolumesFsNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumesFsNameResponse>;
    /**
     * getVolumesFsFlavorsJson - List available file share sizes
     *
     * This endpoint returns a list of available file shares in gigabyte (corresponding IBM Containers command: `cf ic volume fs-flavor-list`).
    **/
    getVolumesFsFlavorsJson(req: operations.GetVolumesFsFlavorsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesFsFlavorsJsonResponse>;
    /**
     * getVolumesFsJson - List available file shares in a space
     *
     * This endpoint returns a list of all file shares that are availble in a space (corresponding IBM Containers command: `cf ic volume fs-list`).
    **/
    getVolumesFsJson(req: operations.GetVolumesFsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesFsJsonResponse>;
    /**
     * getVolumesFsNameJson - Inspect a file share
     *
     * This endpoint returns detailed information about a file share (corresponding IBM Containers command: `cf ic volume fs-inspect FSNAME`).
    **/
    getVolumesFsNameJson(req: operations.GetVolumesFsNameJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesFsNameJsonResponse>;
    /**
     * postVolumesFsCreate - Create a file share in a space
     *
     * This endpoint creates a new file share in a space (corresponding IBM Containers command: `cf ic volume fs-create FSNAME FSSIZE FSIOPS`).
     *
     *  A file share is a persistent NFS-based (Network File System) storage system that hosts Docker volumes in a Bluemix space and allows a user to store and access container and app-related files. To store files in a file share, you must create a container volume and save the data into this volume.
     *
     *  As soon as you create your first volume in a space with the `cf ic volume create VOLNAME` command or the `POST /volumes/create` API endpoint, a default file share with 20 GB at 4 IOPS (Input Output operations Per Second) is created at no cost.
     *
     * The organization manager can create file shares with specific storage size and IOPS to meet the storage needs of the space. File shares can be provisioned in sizes from 20 GB to 12 TB and at IOPS per GB of 0.25, 2 or 4. Run `cf ic volume fs-flavor-list` or call the `GET /volumes/fs/flavors/json` API endpoint to retrieve a list of available file share sizes. The file share size in relation to the number of IOPS impacts the speed that data can be read and written from and to the container volume.
    **/
    postVolumesFsCreate(req: operations.PostVolumesFsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesFsCreateResponse>;
}
