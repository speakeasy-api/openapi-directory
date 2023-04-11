import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsDisableSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ExportConfigurationsDisableRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the export configuration.
     */
    exportConfigurationId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ExportConfigurationsDisableDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsDisableDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsDisableDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsDisableDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsDisableDefaultApplicationJSONError;
}
export declare class ExportConfigurationsDisableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error code with reason
     */
    exportConfigurationsDisableDefaultApplicationJSONObject?: ExportConfigurationsDisableDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
