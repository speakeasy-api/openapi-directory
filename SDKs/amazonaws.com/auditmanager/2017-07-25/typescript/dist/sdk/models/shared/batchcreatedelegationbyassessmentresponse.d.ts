import { SpeakeasyBase } from "../../../internal/utils";
import { BatchCreateDelegationByAssessmentError } from "./batchcreatedelegationbyassessmenterror";
import { Delegation } from "./delegation";
/**
 * Success
 */
export declare class BatchCreateDelegationByAssessmentResponse extends SpeakeasyBase {
    delegations?: Delegation[];
    errors?: BatchCreateDelegationByAssessmentError[];
}
