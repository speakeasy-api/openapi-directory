import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisSchemeStatus } from "./analysisschemestatus";
/**
 * The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
 */
export declare class DefineAnalysisSchemeResponse extends SpeakeasyBase {
    /**
     * The status and configuration of an <code>AnalysisScheme</code>.
     */
    analysisScheme: AnalysisSchemeStatus;
}
