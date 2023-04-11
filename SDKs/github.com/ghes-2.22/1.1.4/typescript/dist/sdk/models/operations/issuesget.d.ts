import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesGetRequest extends SpeakeasyBase {
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Moved permanently
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issue?: shared.Issue;
}
