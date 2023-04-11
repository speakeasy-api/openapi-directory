import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentControlSet } from "./assessmentcontrolset";
import { FrameworkMetadata } from "./frameworkmetadata";
/**
 *  The file used to structure and automate Audit Manager assessments for a given compliance standard.
 */
export declare class AssessmentFramework extends SpeakeasyBase {
    arn?: string;
    controlSets?: AssessmentControlSet[];
    id?: string;
    /**
     *  The metadata of a framework, such as the name, ID, or description.
     */
    metadata?: FrameworkMetadata;
}
