import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CatalogsImportationProcess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * importationCancel - Cancel importation
    **/
    importationCancel(req: operations.ImportationCancelRequest, config?: AxiosRequestConfig): Promise<operations.ImportationCancelResponse>;
    /**
     * importationCommit - Commit Importation
    **/
    importationCommit(req: operations.ImportationCommitRequest, config?: AxiosRequestConfig): Promise<operations.ImportationCommitResponse>;
    /**
     * importationCommitColumns - Commit columns
    **/
    importationCommitColumns(req: operations.ImportationCommitColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ImportationCommitColumnsResponse>;
    /**
     * importationConfigureRemainingCatalogColumns - Configure remaining catalog columns
     *
     * This operation should be used after you have mapped the required BeezUP Columns
    **/
    importationConfigureRemainingCatalogColumns(req: operations.ImportationConfigureRemainingCatalogColumnsRequest, config?: AxiosRequestConfig): Promise<operations.ImportationConfigureRemainingCatalogColumnsResponse>;
    /**
     * importationGetImportationMonitoring - Get the importation status
    **/
    importationGetImportationMonitoring(req: operations.ImportationGetImportationMonitoringRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetImportationMonitoringResponse>;
    /**
     * importationGetProductsReport - Importation Get Products Report
    **/
    importationGetProductsReport(req: operations.ImportationGetProductsReportRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetProductsReportResponse>;
    /**
     * importationGetReport - Importation Get Report
    **/
    importationGetReport(req: operations.ImportationGetReportRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetReportResponse>;
    /**
     * importationGetReportings - Get the latest catalog importation reporting
    **/
    importationGetReportings(req: operations.ImportationGetReportingsRequest, config?: AxiosRequestConfig): Promise<operations.ImportationGetReportingsResponse>;
    /**
     * importationGetReportingsAllStores - Get the latest catalog importation reporting for all your stores
    **/
    importationGetReportingsAllStores(config?: AxiosRequestConfig): Promise<operations.ImportationGetReportingsAllStoresResponse>;
    /**
     * importationStartManualUpdate - Start Manual Import
    **/
    importationStartManualUpdate(req: operations.ImportationStartManualUpdateRequest, config?: AxiosRequestConfig): Promise<operations.ImportationStartManualUpdateResponse>;
    /**
     * importationTechnicalProgression - Get technical progression
    **/
    importationTechnicalProgression(req: operations.ImportationTechnicalProgressionRequest, config?: AxiosRequestConfig): Promise<operations.ImportationTechnicalProgressionResponse>;
}
