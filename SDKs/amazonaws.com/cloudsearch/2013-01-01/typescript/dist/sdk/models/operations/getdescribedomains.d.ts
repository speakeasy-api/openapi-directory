import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}
export declare enum GETDescribeDomainsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDescribeDomainsRequest extends SpeakeasyBase {
    action: GETDescribeDomainsActionEnum;
    /**
     * The names of the domains you want to include in the response.
     */
    domainNames?: string[];
    version: GETDescribeDomainsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
