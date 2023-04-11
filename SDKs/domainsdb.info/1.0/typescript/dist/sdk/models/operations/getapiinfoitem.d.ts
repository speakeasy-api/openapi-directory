import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetApiInfoItemRequest extends SpeakeasyBase {
    /**
     * API key
     */
    apiKey?: string;
}
export declare class GetApiInfoItemResponse extends SpeakeasyBase {
    /**
     * Success
     */
    apiKeyInfo?: shared.APIKeyInfo;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
