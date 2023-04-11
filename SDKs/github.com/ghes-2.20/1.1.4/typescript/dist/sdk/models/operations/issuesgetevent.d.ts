import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IssuesGetEventRequest extends SpeakeasyBase {
    eventId: number;
    owner: string;
    repo: string;
}
export declare class IssuesGetEventResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    issueEvent?: shared.IssueEvent;
}
