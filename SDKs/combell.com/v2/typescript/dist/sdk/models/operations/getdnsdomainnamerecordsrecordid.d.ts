import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
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
export declare class GetDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    dnsRecord?: shared.DnsRecord;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
