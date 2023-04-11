import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDnsDomainNameRecordsRequest extends SpeakeasyBase {
    /**
     * Automatically added
     */
    domainNamePathParameter: string;
    /**
     * The domain name.
     */
    domainNameQueryParameter: string;
    /**
     * Filters records matching the record name. This filter only applies to lookups of A, CNAME, TXT, CAA, ALIAS and TLSA records.
     */
    recordName?: string;
    /**
     * Filters records for the service. This filter only applies to lookups of SRV records.
     */
    service?: string;
    /**
     * The number of items to skip in the resultset.
     */
    skip?: number;
    /**
     * The number of items to return in the resultset. The returned count can be equal or less than this number.
     */
    take?: number;
    /**
     * Filters records matching the type. Most other filters only apply when this filter is specified.
     */
    type?: string;
}
export declare class GetDnsDomainNameRecordsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dnsRecords?: shared.DnsRecord[];
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
