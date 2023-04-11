import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PlayMediaOnQueueRequest extends SpeakeasyBase {
    acceptLanguage: string;
    playMediaRequest?: shared.PlayMediaRequest;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class PlayMediaOnQueueResponse extends SpeakeasyBase {
    contentType: string;
    queue?: shared.Queue;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
