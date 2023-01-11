import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Institutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * accountInstitutionCuration - Institution Curation Review
     *
     * Retrieve a certain curation review by its ID
    **/
    accountInstitutionCuration(req: operations.AccountInstitutionCurationRequest, config?: AxiosRequestConfig): Promise<operations.AccountInstitutionCurationResponse>;
    /**
     * accountInstitutionCurationComments - Institution Curation Review Comments
     *
     * Retrieve a certain curation review's comments.
    **/
    accountInstitutionCurationComments(req: operations.AccountInstitutionCurationCommentsRequest, config?: AxiosRequestConfig): Promise<operations.AccountInstitutionCurationCommentsResponse>;
    /**
     * accountInstitutionCurations - Institution Curation Reviews
     *
     * Retrieve a list of curation reviews for this institution
    **/
    accountInstitutionCurations(req: operations.AccountInstitutionCurationsRequest, config?: AxiosRequestConfig): Promise<operations.AccountInstitutionCurationsResponse>;
    /**
     * institutionArticles - Public Licenses
     *
     * Returns a list of articles belonging to the institution
    **/
    institutionArticles(req: operations.InstitutionArticlesRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionArticlesResponse>;
    /**
     * institutionHrfeedUpload - Private Institution HRfeed Upload
     *
     * More info in the <a href="#hr_feed">HR Feed section</a>
    **/
    institutionHrfeedUpload(req: operations.InstitutionHrfeedUploadRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionHrfeedUploadResponse>;
    /**
     * postAccountInstitutionReviewCurationIdComments - POST Institution Curation Review Comment
     *
     * Add a new comment to the review.
    **/
    postAccountInstitutionReviewCurationIdComments(req: operations.PostAccountInstitutionReviewCurationIdCommentsRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountInstitutionReviewCurationIdCommentsResponse>;
    /**
     * privateAccountInstitutionUser - Private Account Institution User
     *
     * Retrieve institution user information using the account_id
    **/
    privateAccountInstitutionUser(req: operations.PrivateAccountInstitutionUserRequest, config?: AxiosRequestConfig): Promise<operations.PrivateAccountInstitutionUserResponse>;
    /**
     * privateCategoriesList - Private Account Categories
     *
     * List institution categories (including parent Categories)
    **/
    privateCategoriesList(req: operations.PrivateCategoriesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateCategoriesListResponse>;
    /**
     * privateGroupEmbargoOptionsDetails - Private Account Institution Group Embargo Options
     *
     * Account institution group embargo options details
    **/
    privateGroupEmbargoOptionsDetails(req: operations.PrivateGroupEmbargoOptionsDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateGroupEmbargoOptionsDetailsResponse>;
    /**
     * privateInstitutionAccountGroupRoleDelete - Delete Institution Account Group Role
     *
     * Delete Institution Account Group Role
    **/
    privateInstitutionAccountGroupRoleDelete(req: operations.PrivateInstitutionAccountGroupRoleDeleteRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountGroupRoleDeleteResponse>;
    /**
     * privateInstitutionAccountGroupRoles - List Institution Account Group Roles
     *
     * List Institution Account Group Roles
    **/
    privateInstitutionAccountGroupRoles(req: operations.PrivateInstitutionAccountGroupRolesRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountGroupRolesResponse>;
    /**
     * privateInstitutionAccountGroupRolesCreate - Add Institution Account Group Roles
     *
     * Add Institution Account Group Roles
    **/
    privateInstitutionAccountGroupRolesCreate(req: operations.PrivateInstitutionAccountGroupRolesCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountGroupRolesCreateResponse>;
    /**
     * privateInstitutionAccountsCreate - Create new Institution Account
     *
     * Create a new Account by sending account information
    **/
    privateInstitutionAccountsCreate(req: operations.PrivateInstitutionAccountsCreateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsCreateResponse>;
    /**
     * privateInstitutionAccountsList - Private Account Institution Accounts
     *
     * Returns the accounts for which the account has administrative privileges (assigned and inherited).
    **/
    privateInstitutionAccountsList(req: operations.PrivateInstitutionAccountsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsListResponse>;
    /**
     * privateInstitutionAccountsSearch - Private Account Institution Accounts Search
     *
     * Returns the accounts for which the account has administrative privileges (assigned and inherited).
    **/
    privateInstitutionAccountsSearch(req: operations.PrivateInstitutionAccountsSearchRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsSearchResponse>;
    /**
     * privateInstitutionAccountsUpdate - Update Institution Account
     *
     * Update Institution Account
    **/
    privateInstitutionAccountsUpdate(req: operations.PrivateInstitutionAccountsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsUpdateResponse>;
    /**
     * privateInstitutionArticles - Private Institution Articles
     *
     * Get Articles from own institution. User must be administrator of the institution
    **/
    privateInstitutionArticles(req: operations.PrivateInstitutionArticlesRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionArticlesResponse>;
    /**
     * privateInstitutionDetails - Private Account Institutions
     *
     * Account institution details
    **/
    privateInstitutionDetails(req: operations.PrivateInstitutionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionDetailsResponse>;
    /**
     * privateInstitutionEmbargoOptionsDetails - Private Account Institution embargo options
     *
     * Account institution embargo options details
    **/
    privateInstitutionEmbargoOptionsDetails(req: operations.PrivateInstitutionEmbargoOptionsDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionEmbargoOptionsDetailsResponse>;
    /**
     * privateInstitutionGroupsList - Private Account Institution Groups
     *
     * Returns the groups for which the account has administrative privileges (assigned and inherited).
    **/
    privateInstitutionGroupsList(req: operations.PrivateInstitutionGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionGroupsListResponse>;
    /**
     * privateInstitutionRolesList - Private Account Institution Roles
     *
     * Returns the roles available for groups and the institution group.
    **/
    privateInstitutionRolesList(req: operations.PrivateInstitutionRolesListRequest, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionRolesListResponse>;
}
