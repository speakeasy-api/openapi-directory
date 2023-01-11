import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReactionsListForIssuePathParams extends SpeakeasyBase {
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class ReactionsListForIssueQueryParams extends SpeakeasyBase {
    content?: shared.IssueNumberEnum;
    page?: number;
    perPage?: number;
}
export declare class ReactionsListForIssue415ApplicationJson extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
export declare class ReactionsListForIssueRequest extends SpeakeasyBase {
    pathParams: ReactionsListForIssuePathParams;
    queryParams: ReactionsListForIssueQueryParams;
}
export declare class ReactionsListForIssueResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    basicError?: shared.BasicError;
    reactions?: shared.Reaction[];
    reactionsListForIssue415ApplicationJSONObject?: ReactionsListForIssue415ApplicationJson;
}
