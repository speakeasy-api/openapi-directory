import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningDeleteAnalysisRequest extends SpeakeasyBase {
    /**
     * The ID of the analysis, as returned from the `GET /repos/{owner}/{repo}/code-scanning/analyses` operation.
     */
    analysisId: number;
    /**
     * Allow deletion if the specified analysis is the last in a set. If you attempt to delete the final analysis in a set without setting this parameter to `true`, you'll get a 400 response with the message: `Analysis is last of its type and deletion may result in the loss of historical alert data. Please specify confirm_delete.`
     */
    confirmDelete?: string;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningDeleteAnalysis503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningDeleteAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeScanningAnalysisDeletion?: shared.CodeScanningAnalysisDeletion;
    /**
     * Service unavailable
     */
    codeScanningDeleteAnalysis503ApplicationJSONObject?: CodeScanningDeleteAnalysis503ApplicationJSON;
    /**
     * Bad Request
     */
    scimError?: shared.ScimError;
}
