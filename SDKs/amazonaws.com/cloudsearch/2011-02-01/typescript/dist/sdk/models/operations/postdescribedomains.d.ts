import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDomainsActionEnum {
    DescribeDomains = "DescribeDomains"
}
export declare enum POSTDescribeDomainsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
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
