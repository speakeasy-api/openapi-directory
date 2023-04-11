import { SpeakeasyBase } from "../../../internal/utils";
import { ControlInsightsMetadataByAssessmentItem } from "./controlinsightsmetadatabyassessmentitem";
/**
 * Success
 */
export declare class ListAssessmentControlInsightsByControlDomainResponse extends SpeakeasyBase {
    controlInsightsByAssessment?: ControlInsightsMetadataByAssessmentItem[];
    nextToken?: string;
}
