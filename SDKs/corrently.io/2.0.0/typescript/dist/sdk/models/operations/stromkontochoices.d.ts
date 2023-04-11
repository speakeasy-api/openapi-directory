import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StromkontoChoicesRequest extends SpeakeasyBase {
    /**
     * Ethereum style address referencing a valid account alias (never use Stromkonto directly!).
     */
    account?: string;
}
export declare class StromkontoChoicesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    balances?: shared.Balance[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
