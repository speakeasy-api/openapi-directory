import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A section is a subdivision of a project that groups tasks together. It can either be a header above a list of tasks in a list view or a column in a board view of a project.
 *
 * @remarks
 *
 * Sections are largely a shared idiom in Asana’s API for both list and board views of a project regardless of the project’s layout.
 *
 * The ‘memberships’ property when [getting a task](/docs/get-a-task) will return the information for the section or the column under ‘section’ in the response.
 */
export declare class Sections {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add task to section
     *
     * @remarks
     * Add a task to a specific, existing section. This will remove the task from other sections of the project.
     *
     * The task will be inserted at the top of a section unless an insert_before or insert_after parameter is declared.
     *
     * This does not work for separators (tasks with the resource_subtype of section).
     */
    addTaskForSection(req: operations.AddTaskForSectionRequest, config?: AxiosRequestConfig): Promise<operations.AddTaskForSectionResponse>;
    /**
     * Create a section in a project
     *
     * @remarks
     * Creates a new section in a project.
     * Returns the full record of the newly created section.
     */
    createSectionForProject(req: operations.CreateSectionForProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateSectionForProjectResponse>;
    /**
     * Delete a section
     *
     * @remarks
     * A specific, existing section can be deleted by making a DELETE request on
     * the URL for that section.
     *
     * Note that sections must be empty to be deleted.
     *
     * The last remaining section cannot be deleted.
     *
     * Returns an empty data block.
     */
    deleteSection(req: operations.DeleteSectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSectionResponse>;
    /**
     * Get a section
     *
     * @remarks
     * Returns the complete record for a single section.
     */
    getSection(req: operations.GetSectionRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionResponse>;
    /**
     * Get sections in a project
     *
     * @remarks
     * Returns the compact records for all sections in the specified project.
     */
    getSectionsForProject(req: operations.GetSectionsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionsForProjectResponse>;
    /**
     * Move or Insert sections
     *
     * @remarks
     * Move sections relative to each other. One of
     * `before_section` or `after_section` is required.
     *
     * Sections cannot be moved between projects.
     *
     * Returns an empty data block.
     */
    insertSectionForProject(req: operations.InsertSectionForProjectRequest, config?: AxiosRequestConfig): Promise<operations.InsertSectionForProjectResponse>;
    /**
     * Update a section
     *
     * @remarks
     * A specific, existing section can be updated by making a PUT request on
     * the URL for that project. Only the fields provided in the `data` block
     * will be updated; any unspecified fields will remain unchanged. (note that
     * at this time, the only field that can be updated is the `name` field.)
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated section record.
     */
    updateSection(req: operations.UpdateSectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSectionResponse>;
}
