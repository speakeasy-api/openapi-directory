import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum UsersGetUserMetadataDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized"
}
export declare class UsersGetUserMetadataDefaultApplicationJSONError extends SpeakeasyBase {
    code: UsersGetUserMetadataDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class UsersGetUserMetadataDefaultApplicationJSON extends SpeakeasyBase {
    error: UsersGetUserMetadataDefaultApplicationJSONError;
}
/**
 * Success
 */
export declare class UsersGetUserMetadata200ApplicationJSON extends SpeakeasyBase {
    metadata?: Record<string, any>;
    userId?: string;
}
export declare class UsersGetUserMetadataResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usersGetUserMetadata200ApplicationJSONObject?: UsersGetUserMetadata200ApplicationJSON;
    /**
     * Error
     */
    usersGetUserMetadataDefaultApplicationJSONObject?: UsersGetUserMetadataDefaultApplicationJSON;
}
