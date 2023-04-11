import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A status update is an update on the progress of a particular object,
 *
 * @remarks
 * and is sent out to all followers when created. These updates
 * include both text describing the update and a `status_type` intended to
 * represent the overall state of the project. These include: `on_track` for projects that
 * are on track, `at_risk` for projects at risk, `off_track` for projects that
 * are behind, and `on_hold` for projects on hold.
 *
 * Status updates can be created and deleted, but not modified.
 */
export declare class StatusUpdates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a status update
     *
     * @remarks
     * Creates a new status update on an object.
     * Returns the full record of the newly created status update.
     */
    createStatusForObject(req: operations.CreateStatusForObjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateStatusForObjectResponse>;
    /**
     * Delete a status update
     *
     * @remarks
     * Deletes a specific, existing status update.
     *
     * Returns an empty data record.
     */
    deleteStatus(req: operations.DeleteStatusRequest, config?: AxiosRequestConfig): Promise<operations.DeleteStatusResponse>;
    /**
     * Get a status update
     *
     * @remarks
     * Returns the complete record for a single status update.
     */
    getStatus(req: operations.GetStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusResponse>;
    /**
     * Get status updates from an object
     *
     * @remarks
     * Returns the compact status update records for all updates on the object.
     */
    getStatusesForObject(req: operations.GetStatusesForObjectRequest, config?: AxiosRequestConfig): Promise<operations.GetStatusesForObjectResponse>;
}
