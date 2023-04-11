import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Build {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configures the branch for build
     */
    branchConfigurationsCreate(req: operations.BranchConfigurationsCreateRequest, security: operations.BranchConfigurationsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BranchConfigurationsCreateResponse>;
    /**
     * Deletes the branch build configuration
     */
    branchConfigurationsDelete(req: operations.BranchConfigurationsDeleteRequest, security: operations.BranchConfigurationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.BranchConfigurationsDeleteResponse>;
    /**
     * Gets the branch configuration
     */
    branchConfigurationsGet(req: operations.BranchConfigurationsGetRequest, security: operations.BranchConfigurationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BranchConfigurationsGetResponse>;
    /**
     * Reconfigures the branch for build
     */
    branchConfigurationsUpdate(req: operations.BranchConfigurationsUpdateRequest, security: operations.BranchConfigurationsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BranchConfigurationsUpdateResponse>;
    /**
     * Gets the build configuration in Azure pipeline YAML format
     */
    buildConfigurationsGet(req: operations.BuildConfigurationsGetRequest, security: operations.BuildConfigurationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BuildConfigurationsGetResponse>;
    /**
     * Create a build
     */
    buildsCreate(req: operations.BuildsCreateRequest, security: operations.BuildsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsCreateResponse>;
    /**
     * Distribute a build
     */
    buildsDistribute(req: operations.BuildsDistributeRequest, security: operations.BuildsDistributeSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsDistributeResponse>;
    /**
     * Returns the build detail for the given build ID
     */
    buildsGet(req: operations.BuildsGetRequest, security: operations.BuildsGetSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsGetResponse>;
    /**
     * Gets the download URI
     */
    buildsGetDownloadUri(req: operations.BuildsGetDownloadUriRequest, security: operations.BuildsGetDownloadUriSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsGetDownloadUriResponse>;
    /**
     * Get the build log
     */
    buildsGetLog(req: operations.BuildsGetLogRequest, security: operations.BuildsGetLogSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsGetLogResponse>;
    /**
     * Application specific build service status
     */
    buildsGetStatusByAppId(req: operations.BuildsGetStatusByAppIdRequest, security: operations.BuildsGetStatusByAppIdSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsGetStatusByAppIdResponse>;
    /**
     * Returns the list of Git branches for this application
     */
    buildsListBranches(req: operations.BuildsListBranchesRequest, security: operations.BuildsListBranchesSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsListBranchesResponse>;
    /**
     * Returns the list of builds for the branch
     */
    buildsListByBranch(req: operations.BuildsListByBranchRequest, security: operations.BuildsListByBranchSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsListByBranchResponse>;
    /**
     * Returns the projects in the repository for the branch, for all toolsets
     */
    buildsListToolsetProjects(req: operations.BuildsListToolsetProjectsRequest, security: operations.BuildsListToolsetProjectsSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsListToolsetProjectsResponse>;
    /**
     * Returns available toolsets for application
     */
    buildsListToolsets(req: operations.BuildsListToolsetsRequest, security: operations.BuildsListToolsetsSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsListToolsetsResponse>;
    /**
     * Gets the Xamarin SDK bundles available to this app
     */
    buildsListXamarinSDKBundles(req: operations.BuildsListXamarinSDKBundlesRequest, security: operations.BuildsListXamarinSDKBundlesSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsListXamarinSDKBundlesResponse>;
    /**
     * Gets the Xcode versions available to this app
     */
    buildsListXcodeVersions(req: operations.BuildsListXcodeVersionsRequest, security: operations.BuildsListXcodeVersionsSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsListXcodeVersionsResponse>;
    /**
     * Cancels a build
     */
    buildsUpdate(req: operations.BuildsUpdateRequest, security: operations.BuildsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.BuildsUpdateResponse>;
    /**
     * Public webhook sink
     */
    buildsWebhook(req: Record<string, any>, config?: AxiosRequestConfig): Promise<operations.BuildsWebhookResponse>;
    /**
     * Returns commit information for a batch of shas
     */
    commitsListByShaList(req: operations.CommitsListByShaListRequest, security: operations.CommitsListByShaListSecurity, config?: AxiosRequestConfig): Promise<operations.CommitsListByShaListResponse>;
    /**
     * Create a new asset to upload a file
     */
    fileAssetsCreate(req: operations.FileAssetsCreateRequest, security: operations.FileAssetsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.FileAssetsCreateResponse>;
    /**
     * Gets the repositories available from the source code host
     */
    repositoriesList(req: operations.RepositoriesListRequest, security: operations.RepositoriesListSecurity, config?: AxiosRequestConfig): Promise<operations.RepositoriesListResponse>;
    /**
     * Configures the repository for build
     */
    repositoryConfigurationsCreateOrUpdate(req: operations.RepositoryConfigurationsCreateOrUpdateRequest, security: operations.RepositoryConfigurationsCreateOrUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.RepositoryConfigurationsCreateOrUpdateResponse>;
    /**
     * Removes the configuration for the repository
     */
    repositoryConfigurationsDelete(req: operations.RepositoryConfigurationsDeleteRequest, security: operations.RepositoryConfigurationsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.RepositoryConfigurationsDeleteResponse>;
    /**
     * Returns the repository build configuration status of the app
     */
    repositoryConfigurationsList(req: operations.RepositoryConfigurationsListRequest, security: operations.RepositoryConfigurationsListSecurity, config?: AxiosRequestConfig): Promise<operations.RepositoryConfigurationsListResponse>;
}
