import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProvidersRequest extends SpeakeasyBase {
    expand?: string;
}
/**
 * providers
 */
export declare class GetProviders200ApplicationJSON extends SpeakeasyBase {
    providers: shared.Connector[];
    /**
     * total number of results
     */
    total?: number;
}
export declare class GetProvidersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * providers
     */
    getProviders200ApplicationJSONObject?: GetProviders200ApplicationJSON;
}
