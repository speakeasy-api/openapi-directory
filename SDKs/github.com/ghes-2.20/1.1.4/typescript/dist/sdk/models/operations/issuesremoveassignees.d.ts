import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesRemoveAssigneesRequestBody extends SpeakeasyBase {
    /**
     * Usernames of assignees to remove from an issue. _NOTE: Only users with push access can remove assignees from an issue. Assignees are silently ignored otherwise._
     */
    assignees?: string[];
}
export declare class IssuesRemoveAssigneesRequest extends SpeakeasyBase {
    requestBody?: IssuesRemoveAssigneesRequestBody;
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesRemoveAssigneesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    issueSimple?: shared.IssueSimple;
}
