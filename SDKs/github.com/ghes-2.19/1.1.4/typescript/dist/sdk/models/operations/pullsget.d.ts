import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PullsGetRequest extends SpeakeasyBase {
    owner: string;
    pullNumber: number;
    repo: string;
}
export declare class PullsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Pass the appropriate [media type](https://docs.github.com/enterprise-server@2.19/rest/overview/media-types/#commits-commit-comparison-and-pull-requests) to fetch diff and patch formats.
     */
    pullRequest?: shared.PullRequest;
}
