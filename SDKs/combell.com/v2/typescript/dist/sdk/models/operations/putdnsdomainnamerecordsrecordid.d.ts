import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
    /**
     * The record with updated values.
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
    /**
     * Automatically added
     */
    recordIdPathParameter: string;
    /**
     * The id of the record.
     */
    recordIdQueryParameter: string;
}
export declare class PutDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
