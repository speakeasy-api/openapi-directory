import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CatalogsAuto {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * autoConfigureAutoImportInterval - Configure Auto Import Interval
    **/
    autoConfigureAutoImportInterval(req: operations.AutoConfigureAutoImportIntervalRequest, config?: AxiosRequestConfig): Promise<operations.AutoConfigureAutoImportIntervalResponse>;
    /**
     * autoDeleteAutoImport - Delete Auto Import
    **/
    autoDeleteAutoImport(req: operations.AutoDeleteAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoDeleteAutoImportResponse>;
    /**
     * autoGetAutoImportConfiguration - Get the auto import configuration
    **/
    autoGetAutoImportConfiguration(req: operations.AutoGetAutoImportConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.AutoGetAutoImportConfigurationResponse>;
    /**
     * autoPauseAutoImport - Pause Auto Import
    **/
    autoPauseAutoImport(req: operations.AutoPauseAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoPauseAutoImportResponse>;
    /**
     * autoResumeAutoImport - Resume Auto Import
    **/
    autoResumeAutoImport(req: operations.AutoResumeAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoResumeAutoImportResponse>;
    /**
     * autoScheduleAutoImport - Configure Auto Import Schedules
    **/
    autoScheduleAutoImport(req: operations.AutoScheduleAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoScheduleAutoImportResponse>;
    /**
     * autoStartAutoImport - Start Auto Import Manually
    **/
    autoStartAutoImport(req: operations.AutoStartAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.AutoStartAutoImportResponse>;
    /**
     * importationActivateAutoImport - Activate the auto importation of the last successful manual catalog importation.
     *
     * Once you have made your fist manual catalog importation with success, you can call this operation to import it automatically. No parameter required, we know which one it is.
    **/
    importationActivateAutoImport(req: operations.ImportationActivateAutoImportRequest, config?: AxiosRequestConfig): Promise<operations.ImportationActivateAutoImportResponse>;
}
