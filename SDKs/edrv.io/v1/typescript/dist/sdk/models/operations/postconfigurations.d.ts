import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Include Configuration properties to create here
 */
export declare class PostConfigurationsRequestBody extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * A successful response
 */
export declare class PostConfigurations201ApplicationJSON extends SpeakeasyBase {
    message?: string;
    ok?: boolean;
    result?: Record<string, any>;
}
export declare class PostConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A successful response
     */
    postConfigurations201ApplicationJSONObject?: PostConfigurations201ApplicationJSON;
}
