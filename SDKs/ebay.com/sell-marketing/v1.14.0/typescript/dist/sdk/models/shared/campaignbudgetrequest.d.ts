import { SpeakeasyBase } from "../../../internal/utils";
import { BudgetRequest } from "./budgetrequest";
/**
 * A container for the details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.
 */
export declare class CampaignBudgetRequest extends SpeakeasyBase {
    /**
     * A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
     */
    daily?: BudgetRequest;
}
