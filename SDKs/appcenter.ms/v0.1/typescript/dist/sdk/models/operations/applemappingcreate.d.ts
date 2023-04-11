import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppleMappingCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Apple Mapping Request Type
 */
export declare class AppleMappingCreateRequestBody extends SpeakeasyBase {
    /**
     * ID of the apple application in apple store, takes precedence over bundle_identifier when both are provided
     */
    appleId?: string;
    /**
     * Bundle Identifier of the apple package
     */
    bundleIdentifier?: string;
    /**
     * Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
     */
    serviceConnectionId: string;
    /**
     * ID of the Team associated with the app in apple store
     */
    teamIdentifier: string;
}
export declare class AppleMappingCreateRequest extends SpeakeasyBase {
    /**
     * The apple app mapping object
     */
    requestBody: AppleMappingCreateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppleMappingCreateDefaultApplicationJSONCodeEnum {
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
export declare class AppleMappingCreateDefaultApplicationJSON extends SpeakeasyBase {
    code: AppleMappingCreateDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * Apple Mapping Request Type
 */
export declare class AppleMappingCreate201ApplicationJSON extends SpeakeasyBase {
    /**
     * ID of the apple application in Mobile Center
     */
    appId?: string;
    /**
     * ID of the apple application in apple store
     */
    appleId?: string;
    /**
     * Id for the shared service connection. In case of Apple AppStore, this connection will be used to create and connect to the Apple AppStore in Mobile Center.
     */
    serviceConnectionId?: string;
    /**
     * ID of the Team associated with the app in apple store
     */
    teamIdentifier?: string;
}
export declare class AppleMappingCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appleMappingCreate201ApplicationJSONObject?: AppleMappingCreate201ApplicationJSON;
    /**
     * Error
     */
    appleMappingCreateDefaultApplicationJSONObject?: AppleMappingCreateDefaultApplicationJSON;
}
