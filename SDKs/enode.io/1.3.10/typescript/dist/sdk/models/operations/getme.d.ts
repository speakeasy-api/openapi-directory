import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMe200ApplicationJSONLinkedVendors extends SpeakeasyBase {
    /**
     * Whether the provided credentials are currently valid. A `false` value here indicates that a credential has become invalidated, and [Link User](#operation/postUsersUseridLink) should be used to get new credentials from this user.
     */
    isValid?: boolean;
    /**
     * Vendor ID
     */
    vendor?: shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum;
}
/**
 * Successful
 */
export declare class GetMe200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    linkedVendors?: GetMe200ApplicationJSONLinkedVendors[];
}
export declare class GetMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful
     */
    getMe200ApplicationJSONObject?: GetMe200ApplicationJSON;
}
