import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetV2Scim20UsersSortOrderEnum {
    Ascending = "ascending",
    Descending = "descending"
}
export declare class GetV2Scim20UsersRequest extends SpeakeasyBase {
    /**
     * Comma delimited list of attributes to limit to in the response.
     */
    attributes?: string;
    count?: number;
    filter?: string;
    /**
     * User attribute to sort by.
     */
    sortBy?: string;
    sortOrder?: GetV2Scim20UsersSortOrderEnum;
    startIndex?: number;
}
/**
 * Internal Error
 */
export declare class GetV2Scim20Users500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20Users404ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20Users403ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20Users401ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20Users400ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20Users200ApplicationScimPlusJson extends SpeakeasyBase {
    itemsPerPage?: number;
    resources?: shared.ScimUser[];
    schemas?: string[];
    startIndex?: number;
    totalResults?: number;
}
export declare class GetV2Scim20UsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getV2Scim20Users200ApplicationScimPlusJsonObject?: GetV2Scim20Users200ApplicationScimPlusJson;
    /**
     * Bad Request
     */
    getV2Scim20Users400ApplicationScimPlusJsonObject?: GetV2Scim20Users400ApplicationScimPlusJson;
    /**
     * Unauthorized
     */
    getV2Scim20Users401ApplicationScimPlusJsonObject?: GetV2Scim20Users401ApplicationScimPlusJson;
    /**
     * Forbidden
     */
    getV2Scim20Users403ApplicationScimPlusJsonObject?: GetV2Scim20Users403ApplicationScimPlusJson;
    /**
     * Not Found
     */
    getV2Scim20Users404ApplicationScimPlusJsonObject?: GetV2Scim20Users404ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20Users500ApplicationScimPlusJsonObject?: GetV2Scim20Users500ApplicationScimPlusJson;
}
