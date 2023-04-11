import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The merge method to use.
 */
export declare enum PullsMergeRequestBodyMergeMethodEnum {
    Merge = "merge",
    Squash = "squash",
    Rebase = "rebase"
}
export declare class PullsMergeRequestBody extends SpeakeasyBase {
    /**
     * Extra detail to append to automatic commit message.
     */
    commitMessage?: string;
    /**
     * Title for the automatic commit message.
     */
    commitTitle?: string;
    /**
     * The merge method to use.
     */
    mergeMethod?: PullsMergeRequestBodyMergeMethodEnum;
    /**
     * SHA that pull request head must match to allow merge.
     */
    sha?: string;
}
export declare class PullsMergeRequest extends SpeakeasyBase {
    requestBody?: PullsMergeRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The number that identifies the pull request.
     */
    pullNumber: number;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
}
/**
 * Conflict if sha was provided and pull request head did not match
 */
export declare class PullsMerge409ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
/**
 * Method Not Allowed if merge cannot be performed
 */
export declare class PullsMerge405ApplicationJSON extends SpeakeasyBase {
    documentationUrl?: string;
    message?: string;
}
export declare class PullsMergeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * if merge was successful
     */
    pullRequestMergeResult?: shared.PullRequestMergeResult;
    /**
     * Method Not Allowed if merge cannot be performed
     */
    pullsMerge405ApplicationJSONObject?: PullsMerge405ApplicationJSON;
    /**
     * Conflict if sha was provided and pull request head did not match
     */
    pullsMerge409ApplicationJSONObject?: PullsMerge409ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
