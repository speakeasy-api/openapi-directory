import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostBalanceTransferSecurity extends SpeakeasyBase {
    apiKeyAuth?: string;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class PostBalanceTransferResponse extends SpeakeasyBase {
    /**
     * OK - the request has succeeded.
     */
    balanceTransferResponse?: shared.BalanceTransferResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
