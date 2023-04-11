import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesListEventsRequest extends SpeakeasyBase {
    /**
     * issue_number parameter
     */
    issueNumber: number;
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
export declare class IssuesListEventsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Gone
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issueEventForIssues?: any[];
}
