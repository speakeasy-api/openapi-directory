import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBlockIdTransactionIndexSecurity extends SpeakeasyBase {
    key2: string;
}
export declare class GetBlockIdTransactionIndexRequest extends SpeakeasyBase {
    id: string;
    index: string;
}
export declare class GetBlockIdTransactionIndexResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response
     */
    empty?: Record<string, any>;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
