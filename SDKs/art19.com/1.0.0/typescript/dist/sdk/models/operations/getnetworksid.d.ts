import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetNetworksIdSecurity extends SpeakeasyBase {
    apiKey: string;
}
export declare class GetNetworksIdRequest extends SpeakeasyBase {
    /**
     * The ID of the network resource to load.
     */
    id: string;
}
/**
 * Success
 */
export declare class GetNetworksId200ApplicationVndApiPlusJson extends SpeakeasyBase {
    data?: shared.Network;
    /**
     * Links related to the retrieved resource
     */
    links?: shared.ResourceLink;
}
export declare class GetNetworksIdResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    getNetworksId200ApplicationVndApiPlusJsonObject?: GetNetworksId200ApplicationVndApiPlusJson;
}
