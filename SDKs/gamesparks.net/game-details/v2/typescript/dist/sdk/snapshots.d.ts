import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Snapshots {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * copySnapshotToExistingGame
     */
    copySnapshotToExistingGameUsingPOST1(req: operations.CopySnapshotToExistingGameUsingPost1Request, config?: AxiosRequestConfig): Promise<operations.CopySnapshotToExistingGameUsingPost1Response>;
    /**
     * copySnapshotToNewGame
     */
    copySnapshotToNewGameUsingPOST(req: operations.CopySnapshotToNewGameUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CopySnapshotToNewGameUsingPOSTResponse>;
    /**
     * createSnapshots
     */
    createSnapshotsUsingPOST(req: operations.CreateSnapshotsUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.CreateSnapshotsUsingPOSTResponse>;
    /**
     * deleteSnapshot
     */
    deleteSnapshotUsingDELETE1(req: operations.DELETESnapshotUsingDelete1Request, config?: AxiosRequestConfig): Promise<operations.DELETESnapshotUsingDelete1Response>;
    /**
     * getLiveSnapshotId
     */
    getLiveSnapshotIdUsingGET(req: operations.GETLiveSnapshotIdUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETLiveSnapshotIdUsingGETResponse>;
    /**
     * getSnapshot
     */
    getSnapshotUsingGET(req: operations.GETSnapshotUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSnapshotUsingGETResponse>;
    /**
     * getSnapshots
     */
    getSnapshotsUsingGET(req: operations.GETSnapshotsUsingGETRequest, config?: AxiosRequestConfig): Promise<operations.GETSnapshotsUsingGETResponse>;
    /**
     * getSnapshots
     */
    getSnapshotsUsingGET1(req: operations.GETSnapshotsUsingGet1Request, config?: AxiosRequestConfig): Promise<operations.GETSnapshotsUsingGet1Response>;
    /**
     * publishSnapshot
     */
    publishSnapshotUsingPOST1(req: operations.PublishSnapshotUsingPost1Request, config?: AxiosRequestConfig): Promise<operations.PublishSnapshotUsingPost1Response>;
    /**
     * revertToSnapshot
     */
    revertToSnapshotUsingPOST(req: operations.RevertToSnapshotUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.RevertToSnapshotUsingPOSTResponse>;
    /**
     * unpublishSnapshot
     */
    unpublishSnapshotUsingPOST(req: operations.UnpublishSnapshotUsingPOSTRequest, config?: AxiosRequestConfig): Promise<operations.UnpublishSnapshotUsingPOSTResponse>;
}
