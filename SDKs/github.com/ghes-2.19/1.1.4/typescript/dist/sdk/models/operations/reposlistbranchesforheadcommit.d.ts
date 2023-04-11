import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListBranchesForHeadCommitRequest extends SpeakeasyBase {
    /**
     * commit_sha parameter
     */
    commitSha: string;
    owner: string;
    repo: string;
}
/**
 * Preview header missing
 */
export declare class ReposListBranchesForHeadCommit415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReposListBranchesForHeadCommitResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    branchShorts?: shared.BranchShort[];
    /**
     * Preview header missing
     */
    reposListBranchesForHeadCommit415ApplicationJSONObject?: ReposListBranchesForHeadCommit415ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
