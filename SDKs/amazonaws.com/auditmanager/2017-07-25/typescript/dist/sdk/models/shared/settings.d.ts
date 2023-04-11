import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { DeregistrationPolicy } from "./deregistrationpolicy";
import { EvidenceFinderEnablement } from "./evidencefinderenablement";
import { Role } from "./role";
/**
 *  The settings object that holds all supported Audit Manager settings.
 */
export declare class Settings extends SpeakeasyBase {
    defaultAssessmentReportsDestination?: AssessmentReportsDestination;
    defaultProcessOwners?: Role[];
    deregistrationPolicy?: DeregistrationPolicy;
    evidenceFinderEnablement?: EvidenceFinderEnablement;
    isAwsOrgEnabled?: boolean;
    kmsKey?: string;
    snsTopic?: string;
}
