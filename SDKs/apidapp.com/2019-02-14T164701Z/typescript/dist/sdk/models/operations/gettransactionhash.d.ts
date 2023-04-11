import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTransactionHashSecurity extends SpeakeasyBase {
    key2: string;
}
export declare class GetTransactionHashRequest extends SpeakeasyBase {
    hash: string;
}
export declare class GetTransactionHashResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
