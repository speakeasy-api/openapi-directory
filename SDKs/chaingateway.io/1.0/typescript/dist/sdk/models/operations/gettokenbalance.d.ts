import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTokenBalanceRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    getTokenBalanceRequest: shared.GetTokenBalanceRequest;
}
export declare class GetTokenBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getTokenBalance?: shared.GetTokenBalance;
}
