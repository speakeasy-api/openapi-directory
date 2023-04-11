import { SpeakeasyBase } from "../../../internal/utils";
import { ComplianceStatusEnum } from "./compliancestatusenum";
/**
 * Defines the compliance against the resiliency policy for a disruption.
 */
export declare class DisruptionCompliance extends SpeakeasyBase {
    achievableRpoInSecs?: number;
    achievableRtoInSecs?: number;
    complianceStatus: ComplianceStatusEnum;
    currentRpoInSecs?: number;
    currentRtoInSecs?: number;
    message?: string;
    rpoDescription?: string;
    rpoReferenceId?: string;
    rtoDescription?: string;
    rtoReferenceId?: string;
}
