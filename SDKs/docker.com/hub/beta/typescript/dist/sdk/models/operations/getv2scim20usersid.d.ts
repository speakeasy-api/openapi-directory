import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2Scim20UsersIdRequest extends SpeakeasyBase {
    /**
     * The user ID.
     */
    id: string;
}
/**
 * Internal Error
 */
export declare class GetV2Scim20UsersId500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20UsersId404ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20UsersId403ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20UsersId401ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20UsersId400ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20UsersIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    getV2Scim20UsersId400ApplicationScimPlusJsonObject?: GetV2Scim20UsersId400ApplicationScimPlusJson;
    /**
     * Unauthorized
     */
    getV2Scim20UsersId401ApplicationScimPlusJsonObject?: GetV2Scim20UsersId401ApplicationScimPlusJson;
    /**
     * Forbidden
     */
    getV2Scim20UsersId403ApplicationScimPlusJsonObject?: GetV2Scim20UsersId403ApplicationScimPlusJson;
    /**
     * Not Found
     */
    getV2Scim20UsersId404ApplicationScimPlusJsonObject?: GetV2Scim20UsersId404ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20UsersId500ApplicationScimPlusJsonObject?: GetV2Scim20UsersId500ApplicationScimPlusJson;
    scimUser?: shared.ScimUser;
}
