import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomersGetOpeningBalanceListRequest extends SpeakeasyBase {
    /**
     * Id of Customer to return opening balances transaction.
     */
    itemId: number;
}
export declare class CustomersGetOpeningBalanceListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
