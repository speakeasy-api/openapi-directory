import { SpeakeasyBase } from "../../../internal/utils";
import { RokuPlanListItem } from "./rokuplanlistitem";
/**
 * Details of available Roku plans.
 */
export declare class RokuPlans extends SpeakeasyBase {
    /**
     * The list of available plans.
     */
    plans: RokuPlanListItem[];
    /**
     * Details of terms and conditions of the plan.
     */
    termsAndConditions: string;
}
