import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetGetUsersForTopicRequest extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    topicId?: number;
}
export declare class GetGetUsersForTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
