import { SpeakeasyBase } from "../../../internal/utils";
export declare class CodeScanningAnalysisTool extends SpeakeasyBase {
    /**
     * The GUID of the tool used to generate the code scanning analysis, if provided in the uploaded SARIF data.
     */
    guid?: string;
    /**
     * The name of the tool used to generate the code scanning analysis.
     */
    name?: string;
    /**
     * The version of the tool used to generate the code scanning analysis.
     */
    version?: string;
}
