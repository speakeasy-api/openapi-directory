import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal Error
 */
export declare class GetV2Scim20ResourceTypes500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20ResourceTypes401ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
export declare class GetV2Scim20ResourceTypes200ApplicationScimPlusJson extends SpeakeasyBase {
    resources?: shared.ScimResourceType[];
    schemas?: string[];
    totalResults?: number;
}
export declare class GetV2Scim20ResourceTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getV2Scim20ResourceTypes200ApplicationScimPlusJsonObject?: GetV2Scim20ResourceTypes200ApplicationScimPlusJson;
    /**
     * Unauthorized
     */
    getV2Scim20ResourceTypes401ApplicationScimPlusJsonObject?: GetV2Scim20ResourceTypes401ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20ResourceTypes500ApplicationScimPlusJsonObject?: GetV2Scim20ResourceTypes500ApplicationScimPlusJson;
}
