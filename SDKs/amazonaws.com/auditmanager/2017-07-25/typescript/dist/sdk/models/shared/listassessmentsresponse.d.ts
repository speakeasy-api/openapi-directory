import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentMetadataItem } from "./assessmentmetadataitem";
/**
 * Success
 */
export declare class ListAssessmentsResponse extends SpeakeasyBase {
    assessmentMetadata?: AssessmentMetadataItem[];
    nextToken?: string;
}
