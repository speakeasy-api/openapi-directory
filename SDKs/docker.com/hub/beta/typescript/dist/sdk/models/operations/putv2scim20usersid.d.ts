import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutV2Scim20UsersIdRequestBody extends SpeakeasyBase {
    /**
     * If this is omitted from the request, it will default to false resulting in a deactivated user.
     */
    enabled?: boolean;
    name?: shared.ScimUserName;
    schemas: string[];
}
export declare class PutV2Scim20UsersIdRequest extends SpeakeasyBase {
    requestBody: PutV2Scim20UsersIdRequestBody;
    /**
     * The user ID.
     */
    id: string;
}
/**
 * Internal Error
 */
export declare class PutV2Scim20UsersId500ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
/**
 * Conflict
 */
export declare class PutV2Scim20UsersId409ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
/**
 * Not Found
 */
export declare class PutV2Scim20UsersId404ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
/**
 * Forbidden
 */
export declare class PutV2Scim20UsersId403ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
/**
 * Unauthorized
 */
export declare class PutV2Scim20UsersId401ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
/**
 * Bad Request
 */
export declare class PutV2Scim20UsersId400ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    /**
     * Some types of errors will return this per the specification.
     */
    scimType?: string;
    status?: any;
}
export declare class PutV2Scim20UsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    putV2Scim20UsersId400ApplicationScimPlusJsonObject?: PutV2Scim20UsersId400ApplicationScimPlusJson;
    /**
     * Unauthorized
     */
    putV2Scim20UsersId401ApplicationScimPlusJsonObject?: PutV2Scim20UsersId401ApplicationScimPlusJson;
    /**
     * Forbidden
     */
    putV2Scim20UsersId403ApplicationScimPlusJsonObject?: PutV2Scim20UsersId403ApplicationScimPlusJson;
    /**
     * Not Found
     */
    putV2Scim20UsersId404ApplicationScimPlusJsonObject?: PutV2Scim20UsersId404ApplicationScimPlusJson;
    /**
     * Conflict
     */
    putV2Scim20UsersId409ApplicationScimPlusJsonObject?: PutV2Scim20UsersId409ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    putV2Scim20UsersId500ApplicationScimPlusJsonObject?: PutV2Scim20UsersId500ApplicationScimPlusJson;
    scimUser?: shared.ScimUser;
}
