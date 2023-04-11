import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ExportConfigurationsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ExportConfigurationsDeleteRequest extends SpeakeasyBase {
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
export declare enum ExportConfigurationsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ExportConfigurationsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: ExportConfigurationsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ExportConfigurationsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: ExportConfigurationsDeleteDefaultApplicationJSONError;
}
export declare class ExportConfigurationsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Error code with reason
     */
    exportConfigurationsDeleteDefaultApplicationJSONObject?: ExportConfigurationsDeleteDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
