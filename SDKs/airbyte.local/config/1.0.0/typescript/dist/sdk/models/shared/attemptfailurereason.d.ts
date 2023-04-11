import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptFailureOriginEnum } from "./attemptfailureoriginenum";
import { AttemptFailureTypeEnum } from "./attemptfailuretypeenum";
export declare class AttemptFailureReason extends SpeakeasyBase {
    externalMessage?: string;
    /**
     * Indicates where the error originated. If not set, the origin of error is not well known.
     */
    failureOrigin?: AttemptFailureOriginEnum;
    /**
     * Categorizes well known errors into types for programmatic handling. If not set, the type of error is not well known.
     */
    failureType?: AttemptFailureTypeEnum;
    internalMessage?: string;
    /**
     * True if it is known that retrying may succeed, e.g. for a transient failure. False if it is known that a retry will not succeed, e.g. for a configuration issue. If not set, retryable status is not well known.
     */
    retryable?: boolean;
    stacktrace?: string;
    timestamp: number;
}
