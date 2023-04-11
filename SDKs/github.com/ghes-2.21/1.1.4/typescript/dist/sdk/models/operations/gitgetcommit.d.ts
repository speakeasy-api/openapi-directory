import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GitGetCommitRequest extends SpeakeasyBase {
    /**
     * commit_sha parameter
     */
    commitSha: string;
    owner: string;
    repo: string;
}
export declare class GitGetCommitResponse extends SpeakeasyBase {
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
    gitCommit?: shared.GitCommit;
}
