import { SpeakeasyBase } from "../../../internal/utils";
import { CvssScoreDetails } from "./cvssscoredetails";
/**
 * Information about the Amazon Inspector score given to a finding.
 */
export declare class InspectorScoreDetails extends SpeakeasyBase {
    adjustedCvss?: CvssScoreDetails;
}
