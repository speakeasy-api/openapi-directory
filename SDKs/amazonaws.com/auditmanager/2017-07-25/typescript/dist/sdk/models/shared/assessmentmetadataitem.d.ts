import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentStatusEnum } from "./assessmentstatusenum";
import { Delegation } from "./delegation";
import { Role } from "./role";
/**
 *  A metadata object that's associated with an assessment in Audit Manager.
 */
export declare class AssessmentMetadataItem extends SpeakeasyBase {
    complianceType?: string;
    creationTime?: Date;
    delegations?: Delegation[];
    id?: string;
    lastUpdated?: Date;
    name?: string;
    roles?: Role[];
    status?: AssessmentStatusEnum;
}
