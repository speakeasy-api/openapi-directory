import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProvisioningProfileSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ProvisioningProfileRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The release_id
     */
    releaseId: number;
}
export declare enum ProvisioningProfile400ApplicationJSONCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
/**
 * The app's OS is not iOS.
 */
export declare class ProvisioningProfile400ApplicationJSON extends SpeakeasyBase {
    code: ProvisioningProfile400ApplicationJSONCodeEnum;
    message: string;
}
export declare class ProvisioningProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    provisioningProfileResponse?: shared.ProvisioningProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The app's OS is not iOS.
     */
    provisioningProfile400ApplicationJSONObject?: ProvisioningProfile400ApplicationJSON;
}
