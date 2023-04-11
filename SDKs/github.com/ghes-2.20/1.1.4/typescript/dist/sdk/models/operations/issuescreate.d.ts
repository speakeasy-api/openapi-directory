import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesCreateRequestBodyLabels2 extends SpeakeasyBase {
    color?: string;
    description?: string;
    id?: number;
    name?: string;
}
export declare class IssuesCreateRequestBody extends SpeakeasyBase {
    /**
     * Login for the user that this issue should be assigned to. _NOTE: Only users with push access can set the assignee for new issues. The assignee is silently dropped otherwise. **This field is deprecated.**_
     */
    assignee?: string;
    /**
     * Logins for Users to assign to this issue. _NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise._
     */
    assignees?: string[];
    /**
     * The contents of the issue.
     */
    body?: string;
    /**
     * Labels to associate with this issue. _NOTE: Only users with push access can set labels for new issues. Labels are silently dropped otherwise._
     */
    labels?: any[];
    milestone?: any;
    /**
     * The title of the issue.
     */
    title: any;
}
export declare class IssuesCreateRequest extends SpeakeasyBase {
    requestBody: IssuesCreateRequestBody;
    owner: string;
    repo: string;
}
/**
 * Service unavailable
 */
export declare class IssuesCreate503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
export declare class IssuesCreateResponse extends SpeakeasyBase {
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
    issue?: shared.Issue;
    /**
     * Service unavailable
     */
    issuesCreate503ApplicationJSONObject?: IssuesCreate503ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
