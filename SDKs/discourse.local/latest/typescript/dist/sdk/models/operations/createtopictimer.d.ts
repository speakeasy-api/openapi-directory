import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateTopicTimerRequestBody extends SpeakeasyBase {
    basedOnLastPost?: boolean;
    categoryId?: number;
    statusType?: string;
    time?: string;
}
export declare class CreateTopicTimerRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: CreateTopicTimerRequestBody;
    id: string;
}
/**
 * topic updated
 */
export declare class CreateTopicTimer200ApplicationJSON extends SpeakeasyBase {
    basedOnLastPost?: boolean;
    categoryId?: string;
    closed?: boolean;
    duration?: string;
    executeAt?: string;
    success?: string;
}
export declare class CreateTopicTimerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * topic updated
     */
    createTopicTimer200ApplicationJSONObject?: CreateTopicTimer200ApplicationJSON;
}
