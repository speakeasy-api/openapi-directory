import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListDomainsActionEnum {
    ListDomains = "ListDomains"
}
export declare enum GETListDomainsVersionEnum {
    TwoThousandAndNine0415 = "2009-04-15"
}
export declare class GETListDomainsRequest extends SpeakeasyBase {
    awsAccessKeyId: string;
    action: GETListDomainsActionEnum;
    /**
     * The maximum number of domain names you want returned. The range is 1 to 100. The default setting is 100.
     */
    maxNumberOfDomains?: number;
    /**
     * A string informing Amazon SimpleDB where to start the next list of domain names.
     */
    nextToken?: string;
    signature: string;
    signatureMethod: string;
    signatureVersion: string;
    timestamp: string;
    version: GETListDomainsVersionEnum;
}
export declare class GETListDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
