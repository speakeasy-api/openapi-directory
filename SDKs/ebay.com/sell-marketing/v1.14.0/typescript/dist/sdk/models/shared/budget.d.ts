import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
 */
export declare class Budget extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    amount?: Amount;
    /**
     * The budget status for a CPC Promoted Listings campaign. For implementation help, refer to <a href='https://developer.ebay.com/api-docs/sell/marketing/types/pls:BudgetStatusEnum'>eBay API documentation</a>
     */
    budgetStatus?: string;
}
