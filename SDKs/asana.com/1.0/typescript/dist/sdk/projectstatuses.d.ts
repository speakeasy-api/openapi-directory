import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * *Deprecated: new integrations should prefer using [status updates](/docs/asana-statuses)*
 *
 * @remarks
 *
 * A project status is an update on the progress of a particular project,
 * and is sent out to all project followers when created. These updates
 * include both text describing the update and a color code intended to
 * represent the overall state of the project: "green" for projects that
 * are on track, "yellow" for projects at risk, "red" for projects that
 * are behind, and "blue" for projects on hold.
 *
 * Project statuses can be created and deleted, but not modified.
 */
export declare class ProjectStatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a project status
     *
     * @remarks
     * *Deprecated: new integrations should prefer the `/status_updates` route.*
     *
     * Creates a new status update on the project.
     *
     * Returns the full record of the newly created project status update.
     */
    createProjectStatusForProject(req: operations.CreateProjectStatusForProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectStatusForProjectResponse>;
    /**
     * Delete a project status
     *
     * @remarks
     * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*
     *
     * Deletes a specific, existing project status update.
     *
     * Returns an empty data record.
     */
    deleteProjectStatus(req: operations.DeleteProjectStatusRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectStatusResponse>;
    /**
     * Get a project status
     *
     * @remarks
     * *Deprecated: new integrations should prefer the `/status_updates/{status_gid}` route.*
     *
     * Returns the complete record for a single status update.
     */
    getProjectStatus(req: operations.GetProjectStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusResponse>;
    /**
     * Get statuses from a project
     *
     * @remarks
     * *Deprecated: new integrations should prefer the `/status_updates` route.*
     *
     * Returns the compact project status update records for all updates on the project.
     */
    getProjectStatusesForProject(req: operations.GetProjectStatusesForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusesForProjectResponse>;
}
