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
     * privateProjectArticleDelete - Delete project article
     *
     * Delete project article
    **/
    privateProjectArticleDelete(req: operations.PrivateProjectArticleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleDeleteResponse>;
    /**
     * privateProjectArticleDetails - Project article details
     *
     * Project article details
    **/
    privateProjectArticleDetails(req: operations.PrivateProjectArticleDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleDetailsResponse>;
    /**
     * privateProjectArticleFile - Project article file details
     *
     * Project article file details
    **/
    privateProjectArticleFile(req: operations.PrivateProjectArticleFileRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleFileResponse>;
    /**
     * privateProjectArticleFiles - Project article list files
     *
     * List article files
    **/
    privateProjectArticleFiles(req: operations.PrivateProjectArticleFilesRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticleFilesResponse>;
    /**
     * privateProjectArticlesCreate - Create project article
     *
     * Create a new Article and associate it with this project
    **/
    privateProjectArticlesCreate(req: operations.PrivateProjectArticlesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticlesCreateResponse>;
    /**
     * privateProjectArticlesList - List project articles
     *
     * List project articles
    **/
    privateProjectArticlesList(req: operations.PrivateProjectArticlesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectArticlesListResponse>;
    /**
     * privateProjectCollaboratorDelete - Remove project collaborator
     *
     * Remove project collaborator
    **/
    privateProjectCollaboratorDelete(req: operations.PrivateProjectCollaboratorDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCollaboratorDeleteResponse>;
    /**
     * privateProjectCollaboratorsInvite - Invite project collaborators
     *
     * Invite users to collaborate on project or view the project
    **/
    privateProjectCollaboratorsInvite(req: operations.PrivateProjectCollaboratorsInviteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCollaboratorsInviteResponse>;
    /**
     * privateProjectCollaboratorsList - List project collaborators
     *
     * List Project collaborators and invited users
    **/
    privateProjectCollaboratorsList(req: operations.PrivateProjectCollaboratorsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCollaboratorsListResponse>;
    /**
     * privateProjectCreate - Create project
     *
     * Create a new project
    **/
    privateProjectCreate(req: operations.PrivateProjectCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectCreateResponse>;
    /**
     * privateProjectDelete - Delete project
     *
     * A project can be deleted only if: - it is not public - it does not have public articles.
     *
     * When an individual project is deleted, all the articles are moved to my data of each owner.
     *
     * When a group project is deleted, all the articles and files are deleted as well. Only project owner, group admin and above can delete a project.
     *
    **/
    privateProjectDelete(req: operations.PrivateProjectDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectDeleteResponse>;
    /**
     * privateProjectDetails - View project details
     *
     * View a private project
    **/
    privateProjectDetails(req: operations.PrivateProjectDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectDetailsResponse>;
    /**
     * privateProjectLeave - Private Project Leave
     *
     * Please note: project's owner cannot leave the project.
    **/
    privateProjectLeave(req: operations.PrivateProjectLeaveRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectLeaveResponse>;
    /**
     * privateProjectNote - Project note details
    **/
    privateProjectNote(req: operations.PrivateProjectNoteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNoteResponse>;
    /**
     * privateProjectNoteDelete - Delete project note
    **/
    privateProjectNoteDelete(req: operations.PrivateProjectNoteDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNoteDeleteResponse>;
    /**
     * privateProjectNoteUpdate - Update project note
    **/
    privateProjectNoteUpdate(req: operations.PrivateProjectNoteUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNoteUpdateResponse>;
    /**
     * privateProjectNotesCreate - Create project note
     *
     * Create a new project note
    **/
    privateProjectNotesCreate(req: operations.PrivateProjectNotesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNotesCreateResponse>;
    /**
     * privateProjectNotesList - List project notes
     *
     * List project notes
    **/
    privateProjectNotesList(req: operations.PrivateProjectNotesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectNotesListResponse>;
    /**
     * privateProjectPublish - Private Project Publish
     *
     * Publish a project. Possible after all items inside it are public
    **/
    privateProjectPublish(req: operations.PrivateProjectPublishRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectPublishResponse>;
    /**
     * privateProjectUpdate - Update project
     *
     * Updating an project by passing body parameters
    **/
    privateProjectUpdate(req: operations.PrivateProjectUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectUpdateResponse>;
    /**
     * privateProjectsList - Private Projects
     *
     * List private projects
    **/
    privateProjectsList(req: operations.PrivateProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectsListResponse>;
    /**
     * privateProjectsSearch - Private Projects search
     *
     * Search inside the private projects
    **/
    privateProjectsSearch(req: operations.PrivateProjectsSearchRequest, config?: AxiosRequestConfig): Promise<operations.PrivateProjectsSearchResponse>;
    /**
     * projectArticles - Public Project Articles
     *
     * List articles in project
    **/
    projectArticles(req: operations.ProjectArticlesRequest, config?: AxiosRequestConfig): Promise<operations.ProjectArticlesResponse>;
    /**
     * projectDetails - Public Project
     *
     * View a project
    **/
    projectDetails(req: operations.ProjectDetailsRequest, config?: AxiosRequestConfig): Promise<operations.ProjectDetailsResponse>;
    /**
     * projectsList - Public Projects
     *
     * Returns a list of public projects
    **/
    projectsList(req: operations.ProjectsListRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsListResponse>;
    /**
     * projectsSearch - Public Projects Search
     *
     * Returns a list of public articles
    **/
    projectsSearch(req: operations.ProjectsSearchRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsSearchResponse>;
}
