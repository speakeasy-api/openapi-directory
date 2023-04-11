import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ReposGetCombinedStatusForRefRequest extends SpeakeasyBase {
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
     * ref parameter
     */
    ref: string;
    repo: string;
}
export declare class ReposGetCombinedStatusForRefResponse extends SpeakeasyBase {
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
    combinedCommitStatus?: shared.CombinedCommitStatus;
}
