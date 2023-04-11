import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesUnlockRequest extends SpeakeasyBase {
    /**
     * issue_number parameter
     */
    issueNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesUnlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
}
