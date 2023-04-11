import { SpeakeasyBase } from "../../../internal/utils";
import { AssessmentEvidenceFolder } from "./assessmentevidencefolder";
/**
 * Success
 */
export declare class GetEvidenceFoldersByAssessmentResponse extends SpeakeasyBase {
    evidenceFolders?: AssessmentEvidenceFolder[];
    nextToken?: string;
}
