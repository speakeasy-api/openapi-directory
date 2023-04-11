import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2Scim20ResourceTypesNameRequest extends SpeakeasyBase {
    name: string;
}
/**
 * Internal Error
 */
export declare class GetV2Scim20ResourceTypesName500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20ResourceTypesName404ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20ResourceTypesName401ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
export declare class GetV2Scim20ResourceTypesNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    getV2Scim20ResourceTypesName401ApplicationScimPlusJsonObject?: GetV2Scim20ResourceTypesName401ApplicationScimPlusJson;
    /**
     * Not Found
     */
    getV2Scim20ResourceTypesName404ApplicationScimPlusJsonObject?: GetV2Scim20ResourceTypesName404ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20ResourceTypesName500ApplicationScimPlusJsonObject?: GetV2Scim20ResourceTypesName500ApplicationScimPlusJson;
    scimResourceType?: shared.ScimResourceType;
}
