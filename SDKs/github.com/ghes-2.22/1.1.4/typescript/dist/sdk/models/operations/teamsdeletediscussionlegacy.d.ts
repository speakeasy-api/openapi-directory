import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TeamsDeleteDiscussionLegacyRequest extends SpeakeasyBase {
    discussionNumber: number;
    teamId: number;
}
export declare class TeamsDeleteDiscussionLegacyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
