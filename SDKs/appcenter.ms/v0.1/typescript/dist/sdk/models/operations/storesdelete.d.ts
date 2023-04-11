import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StoresDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class StoresDeleteRequest extends SpeakeasyBase {
    requestBody?: string;
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
export declare enum StoresDeleteDefaultApplicationJSONCodeEnum {
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
export declare class StoresDeleteDefaultApplicationJSON extends SpeakeasyBase {
    code: StoresDeleteDefaultApplicationJSONCodeEnum;
    message: string;
}
export declare class StoresDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    storesDeleteDefaultApplicationJSONObject?: StoresDeleteDefaultApplicationJSON;
}
