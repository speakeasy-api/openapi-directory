import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetTransactionCostRequest extends SpeakeasyBase {
    /**
     * The transaction id that needs to be fetched
     */
    id: string;
}
export declare class GetTransactionCostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
