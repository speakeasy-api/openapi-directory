import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteDnsDomainNameRecordsRecordIdRequest extends SpeakeasyBase {
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
export declare class DeleteDnsDomainNameRecordsRecordIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
