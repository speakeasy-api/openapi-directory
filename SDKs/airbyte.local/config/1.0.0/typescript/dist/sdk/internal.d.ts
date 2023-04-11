import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Internal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create or update the state for a connection.
     */
    createOrUpdateState(req: shared.ConnectionStateCreateOrUpdate, config?: AxiosRequestConfig): Promise<operations.CreateOrUpdateStateResponse>;
    /**
     * Get normalization status to determine if we can bypass normalization phase
     */
    getAttemptNormalizationStatusesForJob(req: shared.JobIdRequestBody, config?: AxiosRequestConfig): Promise<operations.GetAttemptNormalizationStatusesForJobResponse>;
    /**
     * For worker to set sync stats of a running attempt.
     */
    saveStats(req: shared.SaveStatsRequestBody, config?: AxiosRequestConfig): Promise<operations.SaveStatsResponse>;
    /**
     * For worker to save the AttemptSyncConfig for an attempt.
     */
    saveSyncConfig(req: shared.SaveAttemptSyncConfigRequestBody, config?: AxiosRequestConfig): Promise<operations.SaveSyncConfigResponse>;
    /**
     * For worker to register the workflow id in attempt.
     */
    setWorkflowInAttempt(req: shared.SetWorkflowInAttemptRequestBody, config?: AxiosRequestConfig): Promise<operations.SetWorkflowInAttemptResponse>;
    /**
     * Should only called from worker, to write result from discover activity back to DB.
     */
    writeDiscoverCatalogResult(req: shared.SourceDiscoverSchemaWriteRequestBody, config?: AxiosRequestConfig): Promise<operations.WriteDiscoverCatalogResultResponse>;
}
