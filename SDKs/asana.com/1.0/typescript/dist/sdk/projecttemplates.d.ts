import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * A project template is an object that allows new projects to be created
 *
 * @remarks
 * with a predefined setup, which may include tasks, sections, rules, etc.
 * It simplifies the process of running a workflow that involves a similar
 * set of work every time.
 *
 *
 * Project templates in organizations are shared with a single team. Currently, the
 * team of a project template cannot be changed via the API.
 */
export declare class ProjectTemplates {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get a project template
     *
     * @remarks
     * Returns the complete project template record for a single project template.
     */
    getProjectTemplate(req: operations.GetProjectTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTemplateResponse>;
    /**
     * Get multiple project templates
     *
     * @remarks
     * Returns the compact project template records for all project templates in the given team or workspace.
     */
    getProjectTemplates(req: operations.GetProjectTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTemplatesResponse>;
    /**
     * Get a team's project templates
     *
     * @remarks
     * Returns the compact project template records for all project templates in the team.
     */
    getProjectTemplatesForTeam(req: operations.GetProjectTemplatesForTeamRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectTemplatesForTeamResponse>;
    /**
     * Instantiate a project from a project template
     *
     * @remarks
     * Creates and returns a job that will asynchronously handle the project instantiation.
     *
     * To form this request, it is recommended to first make a request to [get a project template](/docs/get-a-project-template). Then, from the response, copy the `gid` from the object in the `requested_dates` array. This `gid` should be used in `requested_dates` to instantiate a project.
     *
     * _Note: The body of this request will differ if your workspace is an organization. To determine if your workspace is an organization, use the [is_organization](/docs/workspace) parameter._
     */
    instantiateProject(req: operations.InstantiateProjectRequest, config?: AxiosRequestConfig): Promise<operations.InstantiateProjectResponse>;
}
