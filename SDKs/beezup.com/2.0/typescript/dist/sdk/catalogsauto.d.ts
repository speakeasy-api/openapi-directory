import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CatalogsAuto {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Configure Auto Import Interval
     */
    autoConfigureAutoImportInterval(req: operations.AutoConfigureAutoImportIntervalRequest, config?: AxiosRequestConfig): Promise<operations.AutoConfigureAutoImportIntervalResponse>;
    /**
     * Delete Auto Import
     */
    autoDeleteAutoImport(req: operations.AutoDeleteAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoDeleteAutoImportResponse>;
    /**
     * Get the auto import configuration
     */
    autoGetAutoImportConfiguration(req: operations.AutoGetAutoImportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.AutoGetAutoImportConfigurationResponse>;
    /**
     * Pause Auto Import
     */
    autoPauseAutoImport(req: operations.AutoPauseAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoPauseAutoImportResponse>;
    /**
     * Resume Auto Import
     */
    autoResumeAutoImport(req: operations.AutoResumeAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoResumeAutoImportResponse>;
    /**
     * Configure Auto Import Schedules
     */
    autoScheduleAutoImport(req: operations.AutoScheduleAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoScheduleAutoImportResponse>;
    /**
     * Start Auto Import Manually
     */
    autoStartAutoImport(req: operations.AutoStartAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoStartAutoImportResponse>;
    /**
     * Activate the auto importation of the last successful manual catalog importation.
     *
     * @remarks
     * Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.
     */
    importationActivateAutoImport(req: operations.ImportationActivateAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.ImportationActivateAutoImportResponse>;
}
