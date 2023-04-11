import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposCompareCommitsRequest extends SpeakeasyBase {
    /**
     * The base branch and head branch to compare. This parameter expects the format `{base}...{head}`.
     */
    basehead: string;
    owner: string;
    repo: string;
}
export declare class ReposCompareCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    commitComparison?: shared.CommitComparison;
}
