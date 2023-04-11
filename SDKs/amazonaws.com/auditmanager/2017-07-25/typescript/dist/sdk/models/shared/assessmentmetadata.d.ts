import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentReportsDestination } from "./assessmentreportsdestination";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
import { Delegation } from "./delegation";
import { Role } from "./role";
import { Scope } from "./scope";
/**
 *  The metadata that's associated with the specified assessment.
 */
export declare class AssessmentMetadata extends SpeakeasyBase {
    assessmentReportsDestination?: AssessmentReportsDestination;
    complianceType?: string;
    creationTime?: Date;
    delegations?: Delegation[];
    description?: string;
    id?: string;
    lastUpdated?: Date;
    name?: string;
    roles?: Role[];
    scope?: Scope;
    status?: AssessmentStatusEnum;
}
