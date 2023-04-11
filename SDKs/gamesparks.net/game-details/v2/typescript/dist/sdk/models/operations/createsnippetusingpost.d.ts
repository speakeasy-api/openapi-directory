import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateSnippetUsingPOSTRequest extends SpeakeasyBase {
    /**
     * snippet
     */
    manageSnippet: shared.ManageSnippet;
    /**
     * apiKey
     */
    apiKey: string;
}
export declare class CreateSnippetUsingPOSTResponse extends SpeakeasyBase {
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
