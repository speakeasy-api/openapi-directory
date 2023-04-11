import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesGetMilestoneRequest extends SpeakeasyBase {
    /**
     * milestone_number parameter
     */
    milestoneNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesGetMilestoneResponse extends SpeakeasyBase {
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
    milestone?: shared.Milestone;
}
