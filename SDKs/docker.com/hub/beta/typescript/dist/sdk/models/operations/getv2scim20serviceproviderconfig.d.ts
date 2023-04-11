import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Internal Error
 */
export declare class GetV2Scim20ServiceProviderConfig500ApplicationScimPlusJson extends SpeakeasyBase {
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
export declare class GetV2Scim20ServiceProviderConfig401ApplicationScimPlusJson extends SpeakeasyBase {
    /**
     * Details about why the request failed.
     */
    detail?: string;
    schemas?: string[];
    status?: any;
}
export declare class GetV2Scim20ServiceProviderConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    getV2Scim20ServiceProviderConfig401ApplicationScimPlusJsonObject?: GetV2Scim20ServiceProviderConfig401ApplicationScimPlusJson;
    /**
     * Internal Error
     */
    getV2Scim20ServiceProviderConfig500ApplicationScimPlusJsonObject?: GetV2Scim20ServiceProviderConfig500ApplicationScimPlusJson;
    scimServiceProviderConfig?: shared.ScimServiceProviderConfig;
}
