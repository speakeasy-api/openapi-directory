import { SpeakeasyBase } from "../../../internal/utils";
import { MerchantAccount } from "./merchantaccount";
/**
 * OK - the request has succeeded.
 */
export declare class GetTerminalsUnderAccountResponse extends SpeakeasyBase {
    /**
     * Your company account.
     */
    companyAccount: string;
    /**
     * Array that returns a list of all terminals that are in the inventory of the company account.
     */
    inventoryTerminals?: string[];
    /**
     * Array that returns a list of all merchant accounts belonging to the company account.
     */
    merchantAccounts?: MerchantAccount[];
}
