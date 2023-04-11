import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMailZoneRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Mail zone domain name.
     */
    domainNameQueryParameter: string;
}
export declare class GetMailZoneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    mailZone?: shared.MailZone;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
