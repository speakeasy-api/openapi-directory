import { SpeakeasyBase } from "../../../internal/utils";
import { QualificationRequirement } from "./qualificationrequirement";
export declare class CreateHITTypeRequest extends SpeakeasyBase {
    assignmentDurationInSeconds: number;
    autoApprovalDelayInSeconds?: number;
    description: string;
    keywords?: string;
    qualificationRequirements?: QualificationRequirement[];
    reward: string;
    title: string;
}
