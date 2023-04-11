import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCatchAllRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Mail zone domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Automatically added
     */
    emailAddressPathParameter: string;
    /**
     * E-mail address to which all e-mails are sent to inexistent mailboxes or aliases.
     */
    emailAddressQueryParameter: string;
}
export declare class DeleteCatchAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
