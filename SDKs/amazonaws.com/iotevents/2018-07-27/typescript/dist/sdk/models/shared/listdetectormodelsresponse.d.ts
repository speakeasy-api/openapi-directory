import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelSummary } from "./detectormodelsummary";
/**
 * Success
 */
export declare class ListDetectorModelsResponse extends SpeakeasyBase {
    detectorModelSummaries?: DetectorModelSummary[];
    nextToken?: string;
}
