import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppleMappingDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppleMappingDeleteRequest extends SpeakeasyBase {
    requestBody?: string;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppleMappingDeleteDefaultApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * Error
 */
export declare class AppleMappingDeleteDefaultApplicationJSON extends SpeakeasyBase {
    code: AppleMappingDeleteDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class AppleMappingDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    appleMappingDeleteDefaultApplicationJSONObject?: AppleMappingDeleteDefaultApplicationJSON;
}
