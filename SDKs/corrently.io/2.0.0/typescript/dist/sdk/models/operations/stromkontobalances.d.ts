import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StromkontoBalancesRequest extends SpeakeasyBase {
    /**
     * Ethereum style address referencing a valid account (AKA Stromkonto).
     */
    account?: string;
}
export declare class StromkontoBalancesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    balances?: shared.Balance[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
