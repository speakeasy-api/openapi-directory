import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateActivityOnQueueRequest extends SpeakeasyBase {
    acceptLanguage: string;
    updateActivityRequest?: shared.UpdateActivityRequest;
    userAgent: string;
    xApplecloudextensionRetryCount?: number;
    xApplecloudextensionSessionId: string;
}
export declare class UpdateActivityOnQueueResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    updateActivityResponse?: shared.UpdateActivityResponse;
}
