import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BlockStorage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNewVolume - Create a New Block Storage Volume
     *
     * To create a new volume, send a POST request to `/v2/volumes`. Optionally, a `filesystem_type` attribute may be provided in order to automatically format the volume's filesystem. Pre-formatted volumes are automatically mounted when attached to Ubuntu, Debian, Fedora, Fedora Atomic, and CentOS Droplets created on or after April 26, 2018. Attaching pre-formatted volumes to Droplets without support for auto-mounting is not recommended.
    **/
    createNewVolume(req: operations.CreateNewVolumeRequest, config?: AxiosRequestConfig): Promise<operations.CreateNewVolumeResponse>;
    /**
     * createVolumeSnapshot - Create Snapshot from a Volume
     *
     * To create a snapshot from a volume, sent a POST request to `/v2/volumes/$VOLUME_ID/snapshots`.
    **/
    createVolumeSnapshot(req: operations.CreateVolumeSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.CreateVolumeSnapshotResponse>;
    /**
     * deleteVolume - Delete a Block Storage Volume
     *
     * To delete a block storage volume, destroying all data and removing it from your account, send a DELETE request to `/v2/volumes/$VOLUME_ID`.
     * No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
     *
     *
    **/
    deleteVolume(req: operations.DeleteVolumeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumeResponse>;
    /**
     * deleteVolumeByName - Delete a Block Storage Volume by Name
     *
     * Block storage volumes may also be deleted by name by sending a DELETE request with the volume's **name** and the **region slug** for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
     * No response body will be sent back, but the response code will indicate success. Specifically, the response code will be a 204, which means that the action was successful with no returned body data.
     *
     *
    **/
    deleteVolumeByName(req: operations.DeleteVolumeByNameRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumeByNameResponse>;
    /**
     * deleteVolumeSnapshotById - Delete a Volume Snapshot
     *
     * To delete a volume snapshot, send a DELETE request to
     * `/v2/snapshots/$SNAPSHOT_ID`.
     *
     * A status of 204 will be given. This indicates that the request was processed
     * successfully, but that no response body is needed.
     *
    **/
    deleteVolumeSnapshotById(req: operations.DeleteVolumeSnapshotByIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteVolumeSnapshotByIdResponse>;
    /**
     * getVolume - Retrieve an Existing Block Storage Volume
     *
     * To show information about a block storage volume, send a GET request to `/v2/volumes/$VOLUME_ID`.
     *
     *
    **/
    getVolume(req: operations.GetVolumeRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumeResponse>;
    /**
     * getVolumeSnapshotById - Retreive an Existing Volume Snapshot
     *
     * To retrieve the details of a snapshot that has been created from a volume, send a GET request to `/v2/volumes/snapshots/$SNAPSHOT_ID`.
     *
     *
    **/
    getVolumeSnapshotById(req: operations.GetVolumeSnapshotByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumeSnapshotByIdResponse>;
    /**
     * listAllVolumes - List All Block Storage Volumes
     *
     * To list all of the block storage volumes available on your account, send a GET request to `/v2/volumes`.
     * ## Filtering Results
     * ### By Region
     * The `region` may be provided as query paramater in order to restrict results to volumes available in a specific region. For example: `/v2/volumes?region=nyc1`
     * ### By Name
     * It is also possible to list volumes on your account that match a specified name. To do so, send a GET request with the volume's name as a query parameter to `/v2/volumes?name=$VOLUME_NAME`.
     * **Note:** You can only create one volume per region with the same name.
     * ### By Name and Region
     * It is also possible to retrieve information about a block storage volume by name. To do so, send a GET request with the volume's name and the region slug for the region it is located in as query parameters to `/v2/volumes?name=$VOLUME_NAME&region=nyc1`.
     *
     *
     *
    **/
    listAllVolumes(req: operations.ListAllVolumesRequest, config?: AxiosRequestConfig): Promise<operations.ListAllVolumesResponse>;
    /**
     * listVolumeSnapshots - List Snapshots for a Volume
     *
     * To retrieve the snapshots that have been created from a volume, send a GET request to `/v2/volumes/$VOLUME_ID/snapshots`.
     *
     *
    **/
    listVolumeSnapshots(req: operations.ListVolumeSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListVolumeSnapshotsResponse>;
}
