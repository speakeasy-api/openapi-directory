import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureMailboxAutoForwardRequest extends SpeakeasyBase {
    /**
     * Contains the auto-forward information.
     */
    autoForward?: shared.AutoForward;
    /**
     * Automatically added
     */
    mailboxNamePathParameter: string;
    /**
     * Mailbox name.
     */
    mailboxNameQueryParameter: string;
}
export declare class ConfigureMailboxAutoForwardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
