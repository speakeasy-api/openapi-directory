import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostCategorizeRequestBody extends SpeakeasyBase {
    /**
     * type of the transaction (default: unknown)
     */
    type: string;
    /**
     * value of the transaction
     */
    value: number;
    /**
     * label of the transaction
     */
    wording: string;
}
export declare class PostCategorizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    postCategorize200ApplicationJSONObject?: Record<string, any>;
}
