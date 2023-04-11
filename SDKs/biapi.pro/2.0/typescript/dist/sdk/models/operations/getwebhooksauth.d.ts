import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWebhooksAuthRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * authproviders
 */
export declare class GetWebhooksAuth200ApplicationJSON extends SpeakeasyBase {
    authproviders: shared.AuthProvider[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetWebhooksAuthResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * authproviders
     */
    getWebhooksAuth200ApplicationJSONObject?: GetWebhooksAuth200ApplicationJSON;
}
