import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetEthereumBalanceRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    getEthereumBalanceRequest: shared.GetEthereumBalanceRequest;
}
export declare class GetEthereumBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getEthereumBalance?: shared.GetEthereumBalance;
}
