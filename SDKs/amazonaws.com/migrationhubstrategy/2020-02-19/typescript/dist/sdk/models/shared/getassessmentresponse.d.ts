import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentTarget } from "./assessmenttarget";
import { DataCollectionDetails } from "./datacollectiondetails";
/**
 * Success
 */
export declare class GetAssessmentResponse extends SpeakeasyBase {
    assessmentTargets?: AssessmentTarget[];
    dataCollectionDetails?: DataCollectionDetails;
    id?: string;
}
