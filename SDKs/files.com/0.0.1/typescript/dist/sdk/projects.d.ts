import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations about projects
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
     * Delete Project
     *
     * @remarks
     * Delete Project
     */
    deleteProjectsId(req: operations.DeleteProjectsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProjectsIdResponse>;
    /**
     * List Projects
     *
     * @remarks
     * List Projects
     */
    getProjects(req: operations.GetProjectsRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsResponse>;
    /**
     * Show Project
     *
     * @remarks
     * Show Project
     */
    getProjectsId(req: operations.GetProjectsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectsIdResponse>;
    /**
     * Update Project
     *
     * @remarks
     * Update Project
     */
    patchProjectsId(req: operations.PatchProjectsIdRequest, config?: AxiosRequestConfig): Promise<operations.PatchProjectsIdResponse>;
    /**
     * Create Project
     *
     * @remarks
     * Create Project
     */
    postProjects(req: operations.PostProjectsRequestBody, config?: AxiosRequestConfig): Promise<operations.PostProjectsResponse>;
}
