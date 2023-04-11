import { SpeakeasyBase } from "../../../internal/utils";
import { Budget } from "./budget";
/**
 * A type that defines the budget details for a Cost Per Click (CPC) Promoted Listings campaign.
 */
export declare class CampaignBudget extends SpeakeasyBase {
    /**
     * A container for the budget details of a Promoted Listings campaign that uses the Cost Per Click (CPC) funding model.<br /><br /><span class="tablenote"><b>Note:</b> This container will only be returned for campaigns using the CPC funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>
     */
    daily?: Budget;
}
