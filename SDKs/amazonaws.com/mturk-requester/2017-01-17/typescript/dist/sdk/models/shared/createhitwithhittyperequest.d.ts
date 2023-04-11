import { SpeakeasyBase } from "../../../internal/utils";
import { HITLayoutParameter } from "./hitlayoutparameter";
import { ReviewPolicy } from "./reviewpolicy";
export declare class CreateHITWithHITTypeRequest extends SpeakeasyBase {
    assignmentReviewPolicy?: ReviewPolicy;
    hitLayoutId?: string;
    hitLayoutParameters?: HITLayoutParameter[];
    hitReviewPolicy?: ReviewPolicy;
    hitTypeId: string;
    lifetimeInSeconds: number;
    maxAssignments?: number;
    question?: string;
    requesterAnnotation?: string;
    uniqueRequestToken?: string;
}
