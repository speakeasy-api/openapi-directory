import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesDeleteMilestoneRequest extends SpeakeasyBase {
    /**
     * milestone_number parameter
     */
    milestoneNumber: number;
    owner: string;
    repo: string;
}
export declare class IssuesDeleteMilestoneResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
}
