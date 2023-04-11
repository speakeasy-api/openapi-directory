import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityProblem } from "./capabilityproblem";
/**
 * OK - the request has succeeded.
 */
export declare class VerificationErrors extends SpeakeasyBase {
    /**
     * List of the verification errors.
     */
    problems?: CapabilityProblem[];
}
