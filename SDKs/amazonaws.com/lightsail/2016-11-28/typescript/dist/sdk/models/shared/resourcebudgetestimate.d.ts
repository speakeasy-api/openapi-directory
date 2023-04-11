import { SpeakeasyBase } from "../../../internal/utils";
import { CostEstimate } from "./costestimate";
import { ResourceTypeEnum } from "./resourcetypeenum";
/**
 * Describes the estimated cost or usage that a budget tracks.
 */
export declare class ResourceBudgetEstimate extends SpeakeasyBase {
    costEstimates?: CostEstimate[];
    endTime?: Date;
    resourceName?: string;
    resourceType?: ResourceTypeEnum;
    startTime?: Date;
}
