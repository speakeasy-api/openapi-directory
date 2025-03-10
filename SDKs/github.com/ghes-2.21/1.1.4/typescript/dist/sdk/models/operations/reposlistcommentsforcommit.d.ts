import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposListCommentsForCommitRequest extends SpeakeasyBase {
    /**
     * commit_sha parameter
     */
    commitSha: string;
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
}
export declare class ReposListCommentsForCommitResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    commitComments?: shared.CommitComment[];
}
