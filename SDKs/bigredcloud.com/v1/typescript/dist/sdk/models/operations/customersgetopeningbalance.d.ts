import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CustomersGetOpeningBalanceRequest extends SpeakeasyBase {
    /**
     * Id of Customer to return opening balances.
     */
    itemId: number;
}
export declare class CustomersGetOpeningBalanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    ownerOpeningBalanceInPeriodsDto?: shared.OwnerOpeningBalanceInPeriodsDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
