import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuppliersGetOpeningBalanceListRequest extends SpeakeasyBase {
    /**
     * Id of Supplier to return opening balances transaction.
     */
    itemId: number;
}
export declare class SuppliersGetOpeningBalanceListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    ownerOpeningBalanceDtos?: shared.OwnerOpeningBalanceDto[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
