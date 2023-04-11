import { SpeakeasyBase } from "../../../internal/utils";
import { HITLayoutParameter } from "./hitlayoutparameter";
import { QualificationRequirement } from "./qualificationrequirement";
import { ReviewPolicy } from "./reviewpolicy";
export declare class CreateHITRequest extends SpeakeasyBase {
    assignmentDurationInSeconds: number;
    assignmentReviewPolicy?: ReviewPolicy;
    autoApprovalDelayInSeconds?: number;
    description: string;
    hitLayoutId?: string;
    hitLayoutParameters?: HITLayoutParameter[];
    hitReviewPolicy?: ReviewPolicy;
    keywords?: string;
    lifetimeInSeconds: number;
    maxAssignments?: number;
    qualificationRequirements?: QualificationRequirement[];
    question?: string;
    requesterAnnotation?: string;
    reward: string;
    title: string;
    uniqueRequestToken?: string;
}
