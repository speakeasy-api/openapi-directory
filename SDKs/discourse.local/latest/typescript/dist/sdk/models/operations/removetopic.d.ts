import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveTopicRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    id: string;
}
export declare class RemoveTopicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
