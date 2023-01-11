import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Snapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteSnapshot - Delete a Snapshot
     *
     * Both Droplet and volume snapshots are managed through the `/v2/snapshots/`
     * endpoint. To delete a snapshot, send a DELETE request to
     * `/v2/snapshots/$SNAPSHOT_ID`.
     *
     * A status of 204 will be given. This indicates that the request was processed
     * successfully, but that no response body is needed.
     *
    **/
    deleteSnapshot(req: operations.DeleteSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSnapshotResponse>;
    /**
     * getSnapshot - Retrieve an Existing Snapshot
     *
     * To retrieve information about a snapshot, send a GET request to
     * `/v2/snapshots/$SNAPSHOT_ID`.
     *
     * The response will be a JSON object with a key called `snapshot`. The value of
     * this will be an snapshot object containing the standard snapshot attributes.
     *
    **/
    getSnapshot(req: operations.GetSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.GetSnapshotResponse>;
    /**
     * listAllSnapshots - List All Snapshots
     *
     * To list all of the snapshots available on your account, send a GET request to
     * `/v2/snapshots`.
     *
     * The response will be a JSON object with a key called `snapshots`. This will be
     * set to an array of `snapshot` objects, each of which will contain the standard
     * snapshot attributes.
     *
     * ### Filtering Results by Resource Type
     *
     * It's possible to request filtered results by including certain query parameters.
     *
     * #### List Droplet Snapshots
     *
     * To retrieve only snapshots based on Droplets, include the `resource_type`
     * query parameter set to `droplet`. For example, `/v2/snapshots?resource_type=droplet`.
     *
     * #### List Volume Snapshots
     *
     * To retrieve only snapshots based on volumes, include the `resource_type`
     * query parameter set to `volume`. For example, `/v2/snapshots?resource_type=volume`.
     *
    **/
    listAllSnapshots(req: operations.ListAllSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.ListAllSnapshotsResponse>;
}
