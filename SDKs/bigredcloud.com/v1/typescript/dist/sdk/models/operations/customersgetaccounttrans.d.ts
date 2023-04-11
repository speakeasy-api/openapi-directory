import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomersGetAccountTransRequest extends SpeakeasyBase {
    /**
     * Id of Customer to return account transaction.
     */
    itemId: number;
}
export declare class CustomersGetAccountTransResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accountTranDtos?: shared.AccountTranDto[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
