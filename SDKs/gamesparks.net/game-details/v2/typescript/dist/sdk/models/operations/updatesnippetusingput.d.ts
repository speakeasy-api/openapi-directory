import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateSnippetUsingPUTRequest extends SpeakeasyBase {
    /**
     * snippet
     */
    manageSnippet: shared.ManageSnippet;
    /**
     * apiKey
     */
    apiKey: string;
    /**
     * shortCode
     */
    shortCode: string;
}
export declare class UpdateSnippetUsingPUTResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    manageSnippet?: shared.ManageSnippet;
    /**
     * json error
     */
    messageModel?: shared.MessageModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
