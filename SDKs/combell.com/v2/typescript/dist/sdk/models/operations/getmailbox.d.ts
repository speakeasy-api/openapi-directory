import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMailboxRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    mailboxNamePathParameter: string;
    /**
     * Mailbox name.
     */
    mailboxNameQueryParameter: string;
}
export declare class GetMailboxResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    mailboxDetail?: shared.MailboxDetail;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
