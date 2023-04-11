import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Automation failure.
 */
export declare class FailureDetails extends SpeakeasyBase {
    details?: Record<string, string[]>;
    failureStage?: string;
    failureType?: string;
}
