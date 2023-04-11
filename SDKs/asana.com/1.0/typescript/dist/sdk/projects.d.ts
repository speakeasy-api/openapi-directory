import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A project represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. A project exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 *
 * @remarks
 *
 * Projects in organizations are shared with a single team. Currently, the team of a project cannot be changed via the API. Non-organization workspaces do not have teams and so you should not specify the team of project in a regular workspace.
 *
 * Followers of a project are a subset of the members of that project. Followers of a project will receive all updates including tasks created, added and removed from that project. Members of the project have access to and will receive status updates of the project. Adding followers to a project will add them as members if they are not already, removing followers from a project will not affect membership.
 *
 * **Note:** You can use certain project endpoints to operate on [user task lists](/docs/user-task-lists) ([My Tasks](https://asana.com/guide/help/fundamentals/my-tasks)) by substituting the `{project_gid}` with the `{user_task_list_gid}`. For example, you can perform operations on the custom fields of a [user task list](/docs/user-task-lists) by using the following projects endpoints: [Add a custom field to a project](/docs/add-a-custom-field-to-a-project), [Remove a custom field from a project](/docs/remove-a-custom-field-from-a-project) and [Get a project's custom fields](/docs/get-a-projects-custom-fields)
 */
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add a custom field to a project
     *
     * @remarks
     * Custom fields are associated with projects by way of custom field settings.  This method creates a setting for the project.
     */
    addCustomFieldSettingForProject(req: operations.AddCustomFieldSettingForProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddCustomFieldSettingForProjectResponse>;
    /**
     * Add followers to a project
     *
     * @remarks
     * Adds the specified list of users as followers to the project. Followers are a subset of members who have opted in to receive "tasks added" notifications for a project. Therefore, if the users are not already members of the project, they will also become members as a result of this operation.
     * Returns the updated project record.
     */
    addFollowersForProject(req: operations.AddFollowersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddFollowersForProjectResponse>;
    /**
     * Add users to a project
     *
     * @remarks
     * Adds the specified list of users as members of the project. Note that a user being added as a member may also be added as a *follower* as a result of this operation. This is because the user's default notification settings (i.e., in the "Notifcations" tab of "My Profile Settings") will override this endpoint's default behavior of setting "Tasks added" notifications to `false`.
     * Returns the updated project record.
     */
    addMembersForProject(req: operations.AddMembersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.AddMembersForProjectResponse>;
    /**
     * Create a project
     *
     * @remarks
     * Create a new project in a workspace or team.
     *
     * Every project is required to be created in a specific workspace or
     * organization, and this cannot be changed once set. Note that you can use
     * the `workspace` parameter regardless of whether or not it is an
     * organization.
     *
     * If the workspace for your project is an organization, you must also
     * supply a `team` to share the project with.
     *
     * Returns the full record of the newly created project.
     */
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * Create a project in a team
     *
     * @remarks
     * Creates a project shared with the given team.
     *
     * Returns the full record of the newly created project.
     */
    createProjectForTeam(req: operations.CreateProjectForTeamRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectForTeamResponse>;
    /**
     * Create a project in a workspace
     *
     * @remarks
     * Returns the compact project records for all projects in the workspace.
     *
     * If the workspace for your project is an organization, you must also
     * supply a team to share the project with.
     *
     * Returns the full record of the newly created project.
     */
    createProjectForWorkspace(req: operations.CreateProjectForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectForWorkspaceResponse>;
    /**
     * Delete a project
     *
     * @remarks
     * A specific, existing project can be deleted by making a DELETE request on
     * the URL for that project.
     *
     * Returns an empty data record.
     */
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * Duplicate a project
     *
     * @remarks
     * Creates and returns a job that will asynchronously handle the duplication.
     */
    duplicateProject(req: operations.DuplicateProjectRequest, config?: AxiosRequestConfig): Promise<operations.DuplicateProjectResponse>;
    /**
     * Get a project
     *
     * @remarks
     * Returns the complete project record for a single project.
     */
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * Get multiple projects
     *
     * @remarks
     * Returns the compact project records for some filtered set of projects. Use one or more of the parameters provided to filter the projects returned.
     * *Note: This endpoint may timeout for large domains. Try filtering by team!*
     */
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Get projects a task is in
     *
     * @remarks
     * Returns a compact representation of all of the projects the task is in.
     */
    getProjectsForTask(req: operations.GetProjectsForTaskRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsForTaskResponse>;
    /**
     * Get a team's projects
     *
     * @remarks
     * Returns the compact project records for all projects in the team.
     */
    getProjectsForTeam(req: operations.GetProjectsForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsForTeamResponse>;
    /**
     * Get all projects in a workspace
     *
     * @remarks
     * Returns the compact project records for all projects in the workspace.
     * *Note: This endpoint may timeout for large domains. Prefer the `/teams/{team_gid}/projects` endpoint.*
     */
    getProjectsForWorkspace(req: operations.GetProjectsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsForWorkspaceResponse>;
    /**
     * Get task count of a project
     *
     * @remarks
     * Get an object that holds task count fields. **All fields are excluded by default**. You must [opt in](/docs/input-output-options) using `opt_fields` to get any information from this endpoint.
     *
     * This endpoint has an additional [rate limit](/docs/standard-rate-limits) and each field counts especially high against our [cost limits](/docs/cost-limits).
     *
     * Milestones are just tasks, so they are included in the `num_tasks`, `num_incomplete_tasks`, and `num_completed_tasks` counts.
     */
    getTaskCountsForProject(req: operations.GetTaskCountsForProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetTaskCountsForProjectResponse>;
    /**
     * Create a project template from a project
     *
     * @remarks
     * Creates and returns a job that will asynchronously handle the project template creation. Note that
     * while the resulting project template can be accessed with the API, it won't be visible in the Asana
     * UI until Project Templates 2.0 is launched in the app. See more in [this forum post](https://forum.asana.com/t/a-new-api-for-project-templates/156432).
     */
    projectSaveAsTemplate(req: operations.ProjectSaveAsTemplateRequest, config?: AxiosRequestConfig): Promise<operations.ProjectSaveAsTemplateResponse>;
    /**
     * Remove a custom field from a project
     *
     * @remarks
     * Removes a custom field setting from a project.
     */
    removeCustomFieldSettingForProject(req: operations.RemoveCustomFieldSettingForProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveCustomFieldSettingForProjectResponse>;
    /**
     * Remove followers from a project
     *
     * @remarks
     * Removes the specified list of users from following the project, this will not affect project membership status.
     * Returns the updated project record.
     */
    removeFollowersForProject(req: operations.RemoveFollowersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFollowersForProjectResponse>;
    /**
     * Remove users from a project
     *
     * @remarks
     * Removes the specified list of users from members of the project.
     * Returns the updated project record.
     */
    removeMembersForProject(req: operations.RemoveMembersForProjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveMembersForProjectResponse>;
    /**
     * Update a project
     *
     * @remarks
     * A specific, existing project can be updated by making a PUT request on
     * the URL for that project. Only the fields provided in the `data` block
     * will be updated; any unspecified fields will remain unchanged.
     *
     * When using this method, it is best to specify only those fields you wish
     * to change, or else you may overwrite changes made by another user since
     * you last retrieved the task.
     *
     * Returns the complete updated project record.
     */
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
