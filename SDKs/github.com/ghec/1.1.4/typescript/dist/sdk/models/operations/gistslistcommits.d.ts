import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GistsListCommitsRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the gist.
     */
    gistId: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
}
export declare class GistsListCommitsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    gistCommits?: shared.GistCommit[];
}
