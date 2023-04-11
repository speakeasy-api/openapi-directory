import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CodeScanningListRecentAnalysesRequest extends SpeakeasyBase {
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    /**
     * The Git reference for the analyses you want to list. The `ref` for a branch can be formatted either as `refs/heads/<branch name>` or simply `<branch name>`. To reference a pull request use `refs/pull/<number>/merge`.
     */
    ref?: string;
    repo: string;
    /**
     * Filter analyses belonging to the same SARIF upload.
     */
    sarifId?: string;
    /**
     * The GUID of a code scanning tool. Only results by this tool will be listed. Note that some code scanning tools may not include a GUID in their analysis data. You can specify the tool by using either `tool_guid` or `tool_name`, but not both.
     */
    toolGuid?: string;
    /**
     * The name of a code scanning tool. Only results by this tool will be listed. You can specify the tool by using either `tool_name` or `tool_guid`, but not both.
     */
    toolName?: string;
}
/**
 * Service unavailable
 */
export declare class CodeScanningListRecentAnalyses503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class CodeScanningListRecentAnalysesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    codeScanningAnalyses?: shared.CodeScanningAnalysis[];
    /**
     * Service unavailable
     */
    codeScanningListRecentAnalyses503ApplicationJSONObject?: CodeScanningListRecentAnalyses503ApplicationJSON;
}
