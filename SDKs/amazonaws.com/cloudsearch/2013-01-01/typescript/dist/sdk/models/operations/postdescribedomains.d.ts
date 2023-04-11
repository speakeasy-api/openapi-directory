import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}
export declare enum POSTDescribeDomainsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTDescribeDomainsRequest extends SpeakeasyBase {
    action: POSTDescribeDomainsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDomainsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDomainsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
