import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";
/**
 * Success
 */
export declare class GetEvidenceFoldersByAssessmentControlResponse extends SpeakeasyBase {
    evidenceFolders?: AssessmentEvidenceFolder[];
    nextToken?: string;
}
