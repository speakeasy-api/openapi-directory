import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AppleMappingGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class AppleMappingGetRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum AppleMappingGetDefaultApplicationJSONCodeEnum {
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
export declare class AppleMappingGetDefaultApplicationJSON extends SpeakeasyBase {
    code: AppleMappingGetDefaultApplicationJSONCodeEnum;
    message: string;
}
/**
 * Apple Mapping Request Type
 */
export declare class AppleMappingGet200ApplicationJSON extends SpeakeasyBase {
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
export declare class AppleMappingGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    appleMappingGet200ApplicationJSONObject?: AppleMappingGet200ApplicationJSON;
    /**
     * Error
     */
    appleMappingGetDefaultApplicationJSONObject?: AppleMappingGetDefaultApplicationJSON;
}
