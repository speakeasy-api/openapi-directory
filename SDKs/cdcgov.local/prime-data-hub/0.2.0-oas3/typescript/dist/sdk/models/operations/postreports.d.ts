import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostReportsSecurity extends SpeakeasyBase {
    apiKeyAuth: string;
}
/**
 * Optional ways to process the request
 */
export declare enum PostReportsOptionEnum {
    ValidatePayload = "ValidatePayload",
    CheckConnections = "CheckConnections",
    SendImmediately = "SendImmediately",
    SkipSend = "SkipSend",
    SkipInvalidItems = "SkipInvalidItems"
}
export declare class PostReportsRequest extends SpeakeasyBase {
    /**
     * The public health information being routed
     */
    requestBody: string;
    /**
     * The client's name that matches the client name in metadata
     */
    client: string;
    /**
     * Dynamic default values for an element. ':' or %3A is used to seperate element name and value
     */
    default?: string[];
    /**
     * Optional ways to process the request
     */
    option?: PostReportsOptionEnum;
    /**
     * A comma speparated list of receiver names. Limit the list of possible receivers to these receivers.
     */
    routeTo?: string[];
}
export declare class PostReportsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    report?: shared.Report;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
