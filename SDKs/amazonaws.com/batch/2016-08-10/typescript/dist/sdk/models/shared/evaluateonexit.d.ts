import { SpeakeasyBase } from "../../../internal/utils";
import { RetryActionEnum } from "./retryactionenum";
/**
 * Specifies an array of up to 5 conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met. If none of the <code>EvaluateOnExit</code> conditions in a <code>RetryStrategy</code> match, then the job is retried.
 */
export declare class EvaluateOnExit extends SpeakeasyBase {
    action: RetryActionEnum;
    onExitCode?: string;
    onReason?: string;
    onStatusReason?: string;
}
