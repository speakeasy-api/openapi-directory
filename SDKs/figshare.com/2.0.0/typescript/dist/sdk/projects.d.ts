import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete project article
     *
     * @remarks
     * Delete project article
     */
    privateProjectArticleDelete(req: operations.PrivateProjectArticleDeleteRequest, security: operations.PrivateProjectArticleDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleDeleteResponse>;
    /**
     * Project article details
     *
     * @remarks
     * Project article details
     */
    privateProjectArticleDetails(req: operations.PrivateProjectArticleDetailsRequest, security: operations.PrivateProjectArticleDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleDetailsResponse>;
    /**
     * Project article file details
     *
     * @remarks
     * Project article file details
     */
    privateProjectArticleFile(req: operations.PrivateProjectArticleFileRequest, security: operations.PrivateProjectArticleFileSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleFileResponse>;
    /**
     * Project article list files
     *
     * @remarks
     * List article files
     */
    privateProjectArticleFiles(req: operations.PrivateProjectArticleFilesRequest, security: operations.PrivateProjectArticleFilesSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleFilesResponse>;
    /**
     * Create project article
     *
     * @remarks
     * Create a new Article and associate it with this project
     */
    privateProjectArticlesCreate(req: operations.PrivateProjectArticlesCreateRequest, security: operations.PrivateProjectArticlesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticlesCreateResponse>;
    /**
     * List project articles
     *
     * @remarks
     * List project articles
     */
    privateProjectArticlesList(req: operations.PrivateProjectArticlesListRequest, security: operations.PrivateProjectArticlesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticlesListResponse>;
    /**
     * Remove project collaborator
     *
     * @remarks
     * Remove project collaborator
     */
    privateProjectCollaboratorDelete(req: operations.PrivateProjectCollaboratorDeleteRequest, security: operations.PrivateProjectCollaboratorDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCollaboratorDeleteResponse>;
    /**
     * Invite project collaborators
     *
     * @remarks
     * Invite users to collaborate on project or view the project
     */
    privateProjectCollaboratorsInvite(req: operations.PrivateProjectCollaboratorsInviteRequest, security: operations.PrivateProjectCollaboratorsInviteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCollaboratorsInviteResponse>;
    /**
     * List project collaborators
     *
     * @remarks
     * List Project collaborators and invited users
     */
    privateProjectCollaboratorsList(req: operations.PrivateProjectCollaboratorsListRequest, security: operations.PrivateProjectCollaboratorsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCollaboratorsListResponse>;
    /**
     * Create project
     *
     * @remarks
     * Create a new project
     */
    privateProjectCreate(req: shared.ProjectCreate, security: operations.PrivateProjectCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCreateResponse>;
    /**
     * Delete project
     *
     * @remarks
     * A project can be deleted only if: - it is not public - it does not have public articles.
     *
     * When an individual project is deleted, all the articles are moved to my data of each owner.
     *
     * When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.
     *
     */
    privateProjectDelete(req: operations.PrivateProjectDeleteRequest, security: operations.PrivateProjectDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectDeleteResponse>;
    /**
     * View project details
     *
     * @remarks
     * View a private project
     */
    privateProjectDetails(req: operations.PrivateProjectDetailsRequest, security: operations.PrivateProjectDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectDetailsResponse>;
    /**
     * Private Project Leave
     *
     * @remarks
     * Please note: project's owner cannot leave the project.
     */
    privateProjectLeave(req: operations.PrivateProjectLeaveRequest, security: operations.PrivateProjectLeaveSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectLeaveResponse>;
    /**
     * Project note details
     */
    privateProjectNote(req: operations.PrivateProjectNoteRequest, security: operations.PrivateProjectNoteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNoteResponse>;
    /**
     * Delete project note
     */
    privateProjectNoteDelete(req: operations.PrivateProjectNoteDeleteRequest, security: operations.PrivateProjectNoteDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNoteDeleteResponse>;
    /**
     * Update project note
     */
    privateProjectNoteUpdate(req: operations.PrivateProjectNoteUpdateRequest, security: operations.PrivateProjectNoteUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNoteUpdateResponse>;
    /**
     * Create project note
     *
     * @remarks
     * Create a new project note
     */
    privateProjectNotesCreate(req: operations.PrivateProjectNotesCreateRequest, security: operations.PrivateProjectNotesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNotesCreateResponse>;
    /**
     * List project notes
     *
     * @remarks
     * List project notes
     */
    privateProjectNotesList(req: operations.PrivateProjectNotesListRequest, security: operations.PrivateProjectNotesListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNotesListResponse>;
    /**
     * Private Project Publish
     *
     * @remarks
     * Publish a project. Possible after all items inside it are public
     */
    privateProjectPublish(req: operations.PrivateProjectPublishRequest, security: operations.PrivateProjectPublishSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectPublishResponse>;
    /**
     * Update project
     *
     * @remarks
     * Updating an project by passing body parameters; request can also be made with the PATCH method.
     */
    privateProjectUpdate(req: operations.PrivateProjectUpdateRequest, security: operations.PrivateProjectUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectUpdateResponse>;
    /**
     * Private Projects
     *
     * @remarks
     * List private projects
     */
    privateProjectsList(req: operations.PrivateProjectsListRequest, security: operations.PrivateProjectsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateProjectsListResponse>;
    /**
     * Private Projects search
     *
     * @remarks
     * Search inside the private projects
     */
    privateProjectsSearch(req: shared.ProjectsSearch, config?: AxiosRequestConfig): Promise<operations.PrivateProjectsSearchResponse>;
    /**
     * Public Project Articles
     *
     * @remarks
     * List articles in project
     */
    projectArticles(req: operations.ProjectArticlesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectArticlesResponse>;
    /**
     * Public Project
     *
     * @remarks
     * View a project
     */
    projectDetails(req: operations.ProjectDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectDetailsResponse>;
    /**
     * Public Projects
     *
     * @remarks
     * Returns a list of public projects
     */
    projectsList(req: operations.ProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListResponse>;
    /**
     * Public Projects Search
     *
     * @remarks
     * Returns a list of public articles
     */
    projectsSearch(req: operations.ProjectsSearchRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsSearchResponse>;
}
