import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Codepush {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns the acquisition service status to the caller
     */
    codePushAcquisitionGetAcquisitionStatus(config?: AxiosRequestConfig): Promise<operations.CodePushAcquisitionGetAcquisitionStatusResponse>;
    /**
     * Check for updates
     */
    codePushAcquisitionUpdateCheck(req: operations.CodePushAcquisitionUpdateCheckRequest, config?: AxiosRequestConfig): Promise<operations.CodePushAcquisitionUpdateCheckResponse>;
    /**
     * Report Deployment status metric
     */
    codePushAcquisitionUpdateDeployStatus(req: operations.CodePushAcquisitionUpdateDeployStatusRequestBody, config?: AxiosRequestConfig): Promise<operations.CodePushAcquisitionUpdateDeployStatusResponse>;
    /**
     * Report download of specified release
     */
    codePushAcquisitionUpdateDownloadStatus(req: operations.CodePushAcquisitionUpdateDownloadStatusRequestBody, config?: AxiosRequestConfig): Promise<operations.CodePushAcquisitionUpdateDownloadStatusResponse>;
    /**
     * Gets all releases metrics for specified Deployment
     */
    codePushDeploymentMetricsGet(req: operations.CodePushDeploymentMetricsGetRequest, security: operations.CodePushDeploymentMetricsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentMetricsGetResponse>;
    /**
     * Rollback the latest or a specific release for an app deployment
     */
    codePushDeploymentReleaseRollback(req: operations.CodePushDeploymentReleaseRollbackRequest, security: operations.CodePushDeploymentReleaseRollbackSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentReleaseRollbackResponse>;
    /**
     * Create a new CodePush release for the specified deployment
     */
    codePushDeploymentReleasesCreate(req: operations.CodePushDeploymentReleasesCreateRequest, security: operations.CodePushDeploymentReleasesCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentReleasesCreateResponse>;
    /**
     * Clears a Deployment of releases
     */
    codePushDeploymentReleasesDelete(req: operations.CodePushDeploymentReleasesDeleteRequest, security: operations.CodePushDeploymentReleasesDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentReleasesDeleteResponse>;
    /**
     * Gets the history of releases on a Deployment
     */
    codePushDeploymentReleasesGet(req: operations.CodePushDeploymentReleasesGetRequest, security: operations.CodePushDeploymentReleasesGetSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentReleasesGetResponse>;
    /**
     * Create a new CodePush release upload for the specified deployment
     */
    codePushDeploymentUploadCreate(req: operations.CodePushDeploymentUploadCreateRequest, security: operations.CodePushDeploymentUploadCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentUploadCreateResponse>;
    /**
     * Creates a CodePush Deployment for the given app
     */
    codePushDeploymentsCreate(req: operations.CodePushDeploymentsCreateRequest, security: operations.CodePushDeploymentsCreateSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentsCreateResponse>;
    /**
     * Deletes a CodePush Deployment for the given app
     */
    codePushDeploymentsDelete(req: operations.CodePushDeploymentsDeleteRequest, security: operations.CodePushDeploymentsDeleteSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentsDeleteResponse>;
    /**
     * Gets a CodePush Deployment for the given app
     */
    codePushDeploymentsGet(req: operations.CodePushDeploymentsGetRequest, security: operations.CodePushDeploymentsGetSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentsGetResponse>;
    /**
     * Gets a list of CodePush deployments for the given app
     */
    codePushDeploymentsList(req: operations.CodePushDeploymentsListRequest, security: operations.CodePushDeploymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentsListResponse>;
    /**
     * Promote one release (default latest one) from one deployment to another
     */
    codePushDeploymentsPromote(req: operations.CodePushDeploymentsPromoteRequest, security: operations.CodePushDeploymentsPromoteSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentsPromoteResponse>;
    /**
     * Modifies a CodePush Deployment for the given app
     */
    codePushDeploymentsUpdate(req: operations.CodePushDeploymentsUpdateRequest, security: operations.CodePushDeploymentsUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.CodePushDeploymentsUpdateResponse>;
    /**
     * Modifies a CodePush release metadata under the given Deployment
     */
    deploymentReleasesUpdate(req: operations.DeploymentReleasesUpdateRequest, security: operations.DeploymentReleasesUpdateSecurity, config?: AxiosRequestConfig): Promise<operations.DeploymentReleasesUpdateResponse>;
    /**
     * Check for updates
     */
    legacyCodePushAcquisitionUpdateCheck(req: operations.LegacyCodePushAcquisitionUpdateCheckRequest, security: operations.LegacyCodePushAcquisitionUpdateCheckSecurity, config?: AxiosRequestConfig): Promise<operations.LegacyCodePushAcquisitionUpdateCheckResponse>;
    /**
     * Report download of specified release
     */
    legacyCodePushAcquisitionUpdateDownloadStatus(req: operations.LegacyCodePushAcquisitionUpdateDownloadStatusRequestBody, security: operations.LegacyCodePushAcquisitionUpdateDownloadStatusSecurity, config?: AxiosRequestConfig): Promise<operations.LegacyCodePushAcquisitionUpdateDownloadStatusResponse>;
    /**
     * Report deploy of specified release
     */
    legacyCodePushAcquisitionUpdateInstallsStatus(req: operations.LegacyCodePushAcquisitionUpdateInstallsStatusRequestBody, security: operations.LegacyCodePushAcquisitionUpdateInstallsStatusSecurity, config?: AxiosRequestConfig): Promise<operations.LegacyCodePushAcquisitionUpdateInstallsStatusResponse>;
}
