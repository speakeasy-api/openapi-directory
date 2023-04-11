import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureMailboxAutoReplyRequest extends SpeakeasyBase {
    /**
     * Contains the auto-reply information.
     */
    autoReply?: shared.AutoReply;
    /**
     * Automatically added
     */
    mailboxNamePathParameter: string;
    /**
     * Mailbox name.
     */
    mailboxNameQueryParameter: string;
}
export declare class ConfigureMailboxAutoReplyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
