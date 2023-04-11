import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteMailboxRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    mailboxNamePathParameter: string;
    /**
     * Mailbox name.
     */
    mailboxNameQueryParameter: string;
}
export declare class DeleteMailboxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
