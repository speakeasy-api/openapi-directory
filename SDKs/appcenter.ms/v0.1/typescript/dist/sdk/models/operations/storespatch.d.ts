import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoresPatchSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * Store update request
 */
export declare class StoresPatchRequestBody extends SpeakeasyBase {
    /**
     * Service connection id to updated.
     */
    serviceConnectionId: string;
}
export declare class StoresPatchRequest extends SpeakeasyBase {
    /**
     * Store update request
     */
    requestBody: StoresPatchRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
    /**
     * The name of the store
     */
    storeName: string;
}
export declare enum StoresPatchDefaultApplicationJSONCodeEnum {
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
export declare class StoresPatchDefaultApplicationJSON extends SpeakeasyBase {
    code: StoresPatchDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class StoresPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    storesPatchDefaultApplicationJSONObject?: StoresPatchDefaultApplicationJSON;
}
