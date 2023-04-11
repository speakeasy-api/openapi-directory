import { SpeakeasyBase } from "../../../internal/utils";
import { UsageAllocation } from "./usageallocation";
/**
 * <p>A <code>UsageRecord</code> indicates a quantity of usage for a given product, customer, dimension and time.</p> <p>Multiple requests with the same <code>UsageRecords</code> as input will be de-duplicated to prevent double charges.</p>
 */
export declare class UsageRecord extends SpeakeasyBase {
    customerIdentifier: string;
    dimension: string;
    quantity?: number;
    timestamp: Date;
    usageAllocations?: UsageAllocation[];
}
