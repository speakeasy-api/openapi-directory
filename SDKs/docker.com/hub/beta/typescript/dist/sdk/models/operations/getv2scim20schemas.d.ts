import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal Error
 */
export declare class GetV2Scim20Schemas500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20Schemas401ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
export declare class GetV2Scim20Schemas200ApplicationScimPlusJson extends SpeakeasyBase {
    resources?: shared.ScimSchema[];
    schemas?: string[];
    totalResults?: number;
}
export declare class GetV2Scim20SchemasResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getV2Scim20Schemas200ApplicationScimPlusJsonObject?: GetV2Scim20Schemas200ApplicationScimPlusJson;
    /**
     * Unauthorized
     */
    getV2Scim20Schemas401ApplicationScimPlusJsonObject?: GetV2Scim20Schemas401ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20Schemas500ApplicationScimPlusJsonObject?: GetV2Scim20Schemas500ApplicationScimPlusJson;
}
