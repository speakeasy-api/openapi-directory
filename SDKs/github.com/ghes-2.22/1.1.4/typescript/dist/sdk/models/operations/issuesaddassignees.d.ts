import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesAddAssigneesRequestBody extends SpeakeasyBase {
    /**
     * Usernames of people to assign this issue to. _NOTE: Only users with push access can add assignees to an issue. Assignees are silently ignored otherwise._
     */
    assignees?: string[];
}
export declare class IssuesAddAssigneesRequest extends SpeakeasyBase {
    requestBody?: IssuesAddAssigneesRequestBody;
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesAddAssigneesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    issue?: shared.Issue;
}
