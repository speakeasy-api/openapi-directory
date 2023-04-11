import { SpeakeasyBase } from "../../../internal/utils";
import { CompleteOnConvergenceEnum } from "./completeonconvergenceenum";
/**
 * A flag to indicating that automatic model tuning (AMT) has detected model convergence, defined as a lack of significant improvement (1% or less) against an objective metric.
 */
export declare class ConvergenceDetected extends SpeakeasyBase {
    completeOnConvergence?: CompleteOnConvergenceEnum;
}
