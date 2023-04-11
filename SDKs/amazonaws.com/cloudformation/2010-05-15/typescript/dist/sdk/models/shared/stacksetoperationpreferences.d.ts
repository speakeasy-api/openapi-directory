import { SpeakeasyBase } from "../../../internal/utils";
import { RegionConcurrencyTypeEnum } from "./regionconcurrencytypeenum";
/**
 * <p>The user-specified preferences for how CloudFormation performs a stack set operation.</p> <p>For more information about maximum concurrent accounts and failure tolerance, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options">Stack set operation options</a>.</p>
 */
export declare class StackSetOperationPreferences extends SpeakeasyBase {
    failureToleranceCount?: number;
    failureTolerancePercentage?: number;
    maxConcurrentCount?: number;
    maxConcurrentPercentage?: number;
    regionConcurrencyType?: RegionConcurrencyTypeEnum;
    regionOrder?: string[];
}
