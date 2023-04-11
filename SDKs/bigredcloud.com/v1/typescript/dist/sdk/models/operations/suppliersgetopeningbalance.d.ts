import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SuppliersGetOpeningBalanceRequest extends SpeakeasyBase {
    /**
     * Id of Supplier to return opening balances.
     */
    itemId: number;
}
export declare class SuppliersGetOpeningBalanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
