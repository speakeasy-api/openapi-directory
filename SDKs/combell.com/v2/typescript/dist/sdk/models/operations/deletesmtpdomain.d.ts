import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteSmtpDomainRequest extends SpeakeasyBase {
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
export declare class DeleteSmtpDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
