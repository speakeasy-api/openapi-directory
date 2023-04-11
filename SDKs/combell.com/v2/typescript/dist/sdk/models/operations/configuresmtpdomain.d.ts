import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureSmtpDomainRequest extends SpeakeasyBase {
    /**
     * Contains the smtp domain information.
     */
    updateSmtpDomainRequest?: shared.UpdateSmtpDomainRequest;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * Mail zone domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Smtp domain name.
     */
    hostname: string;
}
export declare class ConfigureSmtpDomainResponse extends SpeakeasyBase {
    /**
     * Bad Request
     */
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
