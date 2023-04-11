import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsEnableSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ExportConfigurationsEnableRequest extends SpeakeasyBase {
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
export declare enum ExportConfigurationsEnableDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsEnableDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsEnableDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsEnableDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsEnableDefaultApplicationJSONError;
}
export declare class ExportConfigurationsEnableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error code with reason
     */
    exportConfigurationsEnableDefaultApplicationJSONObject?: ExportConfigurationsEnableDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
