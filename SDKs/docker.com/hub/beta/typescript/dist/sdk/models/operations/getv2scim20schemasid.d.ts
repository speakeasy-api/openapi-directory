import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetV2Scim20SchemasIdRequest extends SpeakeasyBase {
    id: string;
}
/**
 * Internal Error
 */
export declare class GetV2Scim20SchemasId500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20SchemasId404ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20SchemasId401ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
export declare class GetV2Scim20SchemasIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    getV2Scim20SchemasId401ApplicationScimPlusJsonObject?: GetV2Scim20SchemasId401ApplicationScimPlusJson;
    /**
     * Not Found
     */
    getV2Scim20SchemasId404ApplicationScimPlusJsonObject?: GetV2Scim20SchemasId404ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20SchemasId500ApplicationScimPlusJsonObject?: GetV2Scim20SchemasId500ApplicationScimPlusJson;
    scimSchema?: shared.ScimSchema;
}
