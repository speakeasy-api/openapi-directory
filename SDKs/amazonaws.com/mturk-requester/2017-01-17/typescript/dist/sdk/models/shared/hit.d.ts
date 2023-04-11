import { SpeakeasyBase } from "../../../internal/utils";
import { HITReviewStatusEnum } from "./hitreviewstatusenum";
import { HITStatusEnum } from "./hitstatusenum";
import { QualificationRequirement } from "./qualificationrequirement";
/**
 *  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
 */
export declare class Hit extends SpeakeasyBase {
    assignmentDurationInSeconds?: number;
    autoApprovalDelayInSeconds?: number;
    creationTime?: Date;
    description?: string;
    expiration?: Date;
    hitGroupId?: string;
    hitId?: string;
    hitLayoutId?: string;
    hitReviewStatus?: HITReviewStatusEnum;
    hitStatus?: HITStatusEnum;
    hitTypeId?: string;
    keywords?: string;
    maxAssignments?: number;
    numberOfAssignmentsAvailable?: number;
    numberOfAssignmentsCompleted?: number;
    numberOfAssignmentsPending?: number;
    qualificationRequirements?: QualificationRequirement[];
    question?: string;
    requesterAnnotation?: string;
    /**
     * A string representing a currency amount.
     */
    reward?: string;
    title?: string;
}
