import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuppliersGetAccountTransRequest extends SpeakeasyBase {
    /**
     * Id of Supplier to return account transaction.
     */
    itemId: number;
}
export declare class SuppliersGetAccountTransResponse extends SpeakeasyBase {
    /**
     * OK
     */
    accountTranDtos?: shared.AccountTranDto[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
