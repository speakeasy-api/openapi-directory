import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class OptionsTransactionHashRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    hash: string;
}
export declare class OptionsTransactionHashResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
