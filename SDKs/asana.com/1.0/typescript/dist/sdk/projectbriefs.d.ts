import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A project brief object represents a rich text document that describes a project.
 *
 * @remarks
 *
 * Please note that this API is in *preview*, and is expected to change. This API is to be used for development and testing only as an advance view into the upcoming rich text format experience in the task description. For more information, see [this post](https://forum.asana.com/t/project-brief-api-now-available-as-a-preview/150885) in the developer forum.
 */
export declare class ProjectBriefs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a project brief
     *
     * @remarks
     * Creates a new project brief.
     *
     * Returns the full record of the newly created project brief.
     */
    createProjectBrief(req: operations.CreateProjectBriefRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectBriefResponse>;
    /**
     * Delete a project brief
     *
     * @remarks
     * Deletes a specific, existing project brief.
     *
     * Returns an empty data record.
     */
    deleteProjectBrief(req: operations.DeleteProjectBriefRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectBriefResponse>;
    /**
     * Get a project brief
     *
     * @remarks
     * Get the full record for a project brief.
     */
    getProjectBrief(req: operations.GetProjectBriefRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectBriefResponse>;
    /**
     * Update a project brief
     *
     * @remarks
     * An existing project brief can be updated by making a PUT request on the URL for
     * that project brief. Only the fields provided in the `data` block will be updated;
     * any unspecified fields will remain unchanged.
     *
     * Returns the complete updated project brief record.
     */
    updateProjectBrief(req: operations.UpdateProjectBriefRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectBriefResponse>;
}
