import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListDomainsActionEnum {
    ListDomains = "ListDomains"
}
export declare enum POSTListDomainsVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class POSTListDomainsRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: POSTListDomainsActionEnum;
    /**
     * Pagination limit
     */
    maxNumberOfDomains?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: POSTListDomainsVersionEnum;
}
export declare class POSTListDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
