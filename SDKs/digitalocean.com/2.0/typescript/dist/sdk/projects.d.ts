import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createProject - Create a Project
     *
     * To create a project, send a POST request to `/v2/projects`.
    **/
    createProject(req: operations.CreateProjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateProjectResponse>;
    /**
     * deleteProject - Delete an Existing Project
     *
     * To delete a project, send a DELETE request to `/v2/projects/$PROJECT_ID`. To
     * be deleted, a project must not have any resources assigned to it. Any existing
     * resources must first be reassigned or destroyed, or you will receive a 412 error.
     *
     * A successful request will receive a 204 status code with no body in response.
     * This indicates that the request was processed successfully.
     *
    **/
    deleteProject(req: operations.DeleteProjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectResponse>;
    /**
     * getDefaultProject - Retrieve the Default Project
     *
     * To get your default project, send a GET request to `/v2/projects/default`.
    **/
    getDefaultProject(config?: AxiosRequestConfig): Promise<operations.GetDefaultProjectResponse>;
    /**
     * getProject - Retrieve an Existing Project
     *
     * To get a project, send a GET request to `/v2/projects/$PROJECT_ID`.
    **/
    getProject(req: operations.GetProjectRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectResponse>;
    /**
     * listProjects - List All Projects
     *
     * To list all your projects, send a GET request to `/v2/projects`.
    **/
    listProjects(config?: AxiosRequestConfig): Promise<operations.ListProjectsResponse>;
    /**
     * patchDefaultProject - Patch the Default Project
     *
     * To update only specific attributes of a project, send a PATCH request to `/v2/projects/default`. At least one of the following attributes needs to be sent.
    **/
    patchDefaultProject(req: operations.PatchDefaultProjectRequest, config?: AxiosRequestConfig): Promise<operations.PatchDefaultProjectResponse>;
    /**
     * patchProject - Patch a Project
     *
     * To update only specific attributes of a project, send a PATCH request to `/v2/projects/$PROJECT_ID`. At least one of the following attributes needs to be sent.
    **/
    patchProject(req: operations.PatchProjectRequest, config?: AxiosRequestConfig): Promise<operations.PatchProjectResponse>;
    /**
     * updateDefaultProject - Update the Default Project
     *
     * To update a project, send a PUT request to `/v2/projects/default`. All of the following attributes must be sent.
    **/
    updateDefaultProject(req: operations.UpdateDefaultProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDefaultProjectResponse>;
    /**
     * updateProject - Update a Project
     *
     * To update a project, send a PUT request to `/v2/projects/$PROJECT_ID`. All of the following attributes must be sent.
    **/
    updateProject(req: operations.UpdateProjectRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProjectResponse>;
}
