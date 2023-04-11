import { SpeakeasyBase } from "../../../internal/utils";
import { CapabilityProblemEntity } from "./capabilityproblementity";
import { VerificationError } from "./verificationerror";
export declare class CapabilityProblem extends SpeakeasyBase {
    entity?: CapabilityProblemEntity;
    verificationErrors?: VerificationError[];
}
