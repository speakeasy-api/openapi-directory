import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesRemoveLabelRequest extends SpeakeasyBase {
    /**
     * issue_number parameter
     */
    issueNumber: number;
    name: string;
    owner: string;
    repo: string;
}
export declare class IssuesRemoveLabelResponse extends SpeakeasyBase {
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
    labels?: shared.Label[];
}
