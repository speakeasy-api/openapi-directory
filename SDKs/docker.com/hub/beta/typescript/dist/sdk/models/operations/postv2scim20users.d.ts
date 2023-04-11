import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostV2Scim20UsersRequestBody extends SpeakeasyBase {
    name?: shared.ScimUserName;
    schemas: string[];
    /**
     * The user's email address. This must be reachable via email.
     */
    userName: string;
}
/**
 * Internal Error
 */
export declare class PostV2Scim20Users500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class PostV2Scim20Users409ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class PostV2Scim20Users404ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class PostV2Scim20Users403ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class PostV2Scim20Users401ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class PostV2Scim20Users400ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class PostV2Scim20UsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postV2Scim20Users400ApplicationScimPlusJsonObject?: PostV2Scim20Users400ApplicationScimPlusJson;
    /**
     * Unauthorized
     */
    postV2Scim20Users401ApplicationScimPlusJsonObject?: PostV2Scim20Users401ApplicationScimPlusJson;
    /**
     * Forbidden
     */
    postV2Scim20Users403ApplicationScimPlusJsonObject?: PostV2Scim20Users403ApplicationScimPlusJson;
    /**
     * Not Found
     */
    postV2Scim20Users404ApplicationScimPlusJsonObject?: PostV2Scim20Users404ApplicationScimPlusJson;
    /**
     * Conflict
     */
    postV2Scim20Users409ApplicationScimPlusJsonObject?: PostV2Scim20Users409ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    postV2Scim20Users500ApplicationScimPlusJsonObject?: PostV2Scim20Users500ApplicationScimPlusJson;
    scimUser?: shared.ScimUser;
}
