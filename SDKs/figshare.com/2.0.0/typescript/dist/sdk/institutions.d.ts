import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Institutions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Institution Curation Review
     *
     * @remarks
     * Retrieve a certain curation review by its ID
     */
    accountInstitutionCuration(req: operations.AccountInstitutionCurationRequest, security: operations.AccountInstitutionCurationSecurity, config?: AxiosRequestConfig): Promise<operations.AccountInstitutionCurationResponse>;
    /**
     * Institution Curation Review Comments
     *
     * @remarks
     * Retrieve a certain curation review's comments.
     */
    accountInstitutionCurationComments(req: operations.AccountInstitutionCurationCommentsRequest, security: operations.AccountInstitutionCurationCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.AccountInstitutionCurationCommentsResponse>;
    /**
     * Institution Curation Reviews
     *
     * @remarks
     * Retrieve a list of curation reviews for this institution
     */
    accountInstitutionCurations(req: operations.AccountInstitutionCurationsRequest, security: operations.AccountInstitutionCurationsSecurity, config?: AxiosRequestConfig): Promise<operations.AccountInstitutionCurationsResponse>;
    /**
     * Private account institution group custom fields
     *
     * @remarks
     * Returns the custom fields in the group the user belongs to, or the ones in the group specified, if the user has access.
     */
    customFieldsList(req: operations.CustomFieldsListRequest, security: operations.CustomFieldsListSecurity, config?: AxiosRequestConfig): Promise<operations.CustomFieldsListResponse>;
    /**
     * Custom fields values files upload
     *
     * @remarks
     * Uploads a CSV containing values for a specific custom field of type <b>dropdown_large_list</b>. More details in the <a href="#custom_fields">Custom Fields section</a>
     */
    customFieldsUpload(req: operations.CustomFieldsUploadRequest, security: operations.CustomFieldsUploadSecurity, config?: AxiosRequestConfig): Promise<operations.CustomFieldsUploadResponse>;
    /**
     * Public Licenses
     *
     * @remarks
     * Returns a list of articles belonging to the institution
     */
    institutionArticles(req: operations.InstitutionArticlesRequest, config?: AxiosRequestConfig): Promise<operations.InstitutionArticlesResponse>;
    /**
     * Private Institution HRfeed Upload
     *
     * @remarks
     * More info in the <a href="#hr_feed">HR Feed section</a>
     */
    institutionHrfeedUpload(req: operations.InstitutionHrfeedUploadRequestBody, security: operations.InstitutionHrfeedUploadSecurity, config?: AxiosRequestConfig): Promise<operations.InstitutionHrfeedUploadResponse>;
    /**
     * POST Institution Curation Review Comment
     *
     * @remarks
     * Add a new comment to the review.
     */
    postAccountInstitutionReviewCurationIdComments(req: operations.PostAccountInstitutionReviewCurationIdCommentsRequest, security: operations.PostAccountInstitutionReviewCurationIdCommentsSecurity, config?: AxiosRequestConfig): Promise<operations.PostAccountInstitutionReviewCurationIdCommentsResponse>;
    /**
     * Private Account Institution User
     *
     * @remarks
     * Retrieve institution user information using the account_id
     */
    privateAccountInstitutionUser(req: operations.PrivateAccountInstitutionUserRequest, security: operations.PrivateAccountInstitutionUserSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateAccountInstitutionUserResponse>;
    /**
     * Private Account Categories
     *
     * @remarks
     * List institution categories (including parent Categories)
     */
    privateCategoriesList(config?: AxiosRequestConfig): Promise<operations.PrivateCategoriesListResponse>;
    /**
     * Private Account Institution Group Embargo Options
     *
     * @remarks
     * Account institution group embargo options details
     */
    privateGroupEmbargoOptionsDetails(req: operations.PrivateGroupEmbargoOptionsDetailsRequest, security: operations.PrivateGroupEmbargoOptionsDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateGroupEmbargoOptionsDetailsResponse>;
    /**
     * Delete Institution Account Group Role
     *
     * @remarks
     * Delete Institution Account Group Role
     */
    privateInstitutionAccountGroupRoleDelete(req: operations.PrivateInstitutionAccountGroupRoleDeleteRequest, security: operations.PrivateInstitutionAccountGroupRoleDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountGroupRoleDeleteResponse>;
    /**
     * List Institution Account Group Roles
     *
     * @remarks
     * List Institution Account Group Roles
     */
    privateInstitutionAccountGroupRoles(req: operations.PrivateInstitutionAccountGroupRolesRequest, security: operations.PrivateInstitutionAccountGroupRolesSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountGroupRolesResponse>;
    /**
     * Add Institution Account Group Roles
     *
     * @remarks
     * Add Institution Account Group Roles
     */
    privateInstitutionAccountGroupRolesCreate(req: operations.PrivateInstitutionAccountGroupRolesCreateRequest, security: operations.PrivateInstitutionAccountGroupRolesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountGroupRolesCreateResponse>;
    /**
     * Create new Institution Account
     *
     * @remarks
     * Create a new Account by sending account information
     */
    privateInstitutionAccountsCreate(req: shared.AccountCreate, security: operations.PrivateInstitutionAccountsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsCreateResponse>;
    /**
     * Private Account Institution Accounts
     *
     * @remarks
     * Returns the accounts for which the account has administrative privileges (assigned and inherited).
     */
    privateInstitutionAccountsList(req: operations.PrivateInstitutionAccountsListRequest, security: operations.PrivateInstitutionAccountsListSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsListResponse>;
    /**
     * Private Account Institution Accounts Search
     *
     * @remarks
     * Returns the accounts for which the account has administrative privileges (assigned and inherited).
     */
    privateInstitutionAccountsSearch(req: shared.InstitutionAccountsSearch, security: operations.PrivateInstitutionAccountsSearchSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsSearchResponse>;
    /**
     * Update Institution Account
     *
     * @remarks
     * Update Institution Account
     */
    privateInstitutionAccountsUpdate(req: operations.PrivateInstitutionAccountsUpdateRequest, security: operations.PrivateInstitutionAccountsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionAccountsUpdateResponse>;
    /**
     * Private Institution Articles
     *
     * @remarks
     * Get Articles from own institution. User must be administrator of the institution
     */
    privateInstitutionArticles(req: operations.PrivateInstitutionArticlesRequest, security: operations.PrivateInstitutionArticlesSecurity, config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionArticlesResponse>;
    /**
     * Private Account Institutions
     *
     * @remarks
     * Account institution details
     */
    privateInstitutionDetails(config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionDetailsResponse>;
    /**
     * Private Account Institution embargo options
     *
     * @remarks
     * Account institution embargo options details
     */
    privateInstitutionEmbargoOptionsDetails(config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionEmbargoOptionsDetailsResponse>;
    /**
     * Private Account Institution Groups
     *
     * @remarks
     * Returns the groups for which the account has administrative privileges (assigned and inherited).
     */
    privateInstitutionGroupsList(config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionGroupsListResponse>;
    /**
     * Private Account Institution Roles
     *
     * @remarks
     * Returns the roles available for groups and the institution group.
     */
    privateInstitutionRolesList(config?: AxiosRequestConfig): Promise<operations.PrivateInstitutionRolesListResponse>;
}
