import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
/**
 * Response
 */
export declare class CodeScanningAnalysis extends SpeakeasyBase {
    /**
     * Identifies the configuration under which the analysis was executed. For example, in GitHub Actions this includes the workflow filename and job name.
     */
    analysisKey: string;
    /**
     * Identifies the configuration under which the analysis was executed. Used to distinguish between multiple analyses for the same tool and commit, but performed on different languages or different parts of the code.
     */
    category?: string;
    /**
     * The SHA of the commit to which the analysis you are uploading relates.
     */
    commitSha: string;
    /**
     * The time that the analysis was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    createdAt: Date;
    deletable: boolean;
    /**
     * Identifies the variable values associated with the environment in which this analysis was performed.
     */
    environment: string;
    error: string;
    /**
     * Unique identifier for this analysis.
     */
    id: number;
    /**
     * The full Git reference, formatted as `refs/heads/<branch name>`,
     *
     * @remarks
     * `refs/pull/<number>/merge`, or `refs/pull/<number>/head`.
     */
    ref: string;
    /**
     * The total number of results in the analysis.
     */
    resultsCount: number;
    /**
     * The total number of rules used in the analysis.
     */
    rulesCount: number;
    /**
     * An identifier for the upload.
     */
    sarifId: string;
    tool: CodeScanningAnalysisTool;
    /**
     * The REST API URL of the analysis resource.
     */
    url: string;
    /**
     * Warning generated when processing the analysis
     */
    warning: string;
}
