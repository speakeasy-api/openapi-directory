import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostDnsDomainNameRecordsRequest extends SpeakeasyBase {
    /**
     * The record to create
     */
    dnsRecord?: shared.DnsRecord;
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The domain name.
     */
    domainNameQueryParameter: string;
}
export declare class PostDnsDomainNameRecordsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
