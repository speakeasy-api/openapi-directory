import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMailboxesRequest extends SpeakeasyBase {
    /**
     * Obligated domain name for getting mailboxes.
     */
    domainName?: string;
}
export declare class GetMailboxesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    mailboxes?: shared.Mailbox[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
