import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChangeMailboxPasswordRequest extends SpeakeasyBase {
    /**
     * Contains the new password.
     */
    updateMailboxPasswordRequest?: shared.UpdateMailboxPasswordRequest;
    /**
     * Automatically added
     */
    mailboxNamePathParameter: string;
    /**
     * Mailbox name.
     */
    mailboxNameQueryParameter: string;
}
export declare class ChangeMailboxPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
