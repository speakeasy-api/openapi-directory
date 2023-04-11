import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BookmarkTopicRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    id: string;
}
export declare class BookmarkTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
