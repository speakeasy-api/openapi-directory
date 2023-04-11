import { SpeakeasyBase } from "../../../internal/utils";
import { DetectorModelVersionSummary } from "./detectormodelversionsummary";
/**
 * Success
 */
export declare class ListDetectorModelVersionsResponse extends SpeakeasyBase {
    detectorModelVersionSummaries?: DetectorModelVersionSummary[];
    nextToken?: string;
}
