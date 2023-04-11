import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzeIDDetections } from "./analyzeiddetections";
/**
 * Structure containing both the normalized type of the extracted information and the text associated with it. These are extracted as Type and Value respectively.
 */
export declare class IdentityDocumentField extends SpeakeasyBase {
    /**
     * Used to contain the information detected by an AnalyzeID operation.
     */
    type?: AnalyzeIDDetections;
    /**
     * Used to contain the information detected by an AnalyzeID operation.
     */
    valueDetection?: AnalyzeIDDetections;
}
