import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    accountIdPathParameter: string;
    /**
     * The id of the account.
     */
    accountIdQueryParameter: number;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    /**
     * Success
     */
    accountDetail?: shared.AccountDetail;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
