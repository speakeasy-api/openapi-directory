import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PostV1OrderFeedbackActionEnum {
    Approve = "APPROVE",
    Reject = "REJECT",
    RejectBlacklist = "REJECT_BLACKLIST"
}
export declare enum PostV1OrderFeedbackFormatEnum {
    Json = "json",
    Xml = "xml"
}
export declare class PostV1OrderFeedbackRequest extends SpeakeasyBase {
    action: PostV1OrderFeedbackActionEnum;
    format?: PostV1OrderFeedbackFormatEnum;
    id: string;
    key: string;
    notes?: string;
}
export declare class PostV1OrderFeedbackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Feedback order response
     */
    postV1OrderFeedback200ApplicationJSONString?: string;
}
