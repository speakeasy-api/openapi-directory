import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeTrafficSourcesActionEnum {
    DescribeTrafficSources = "DescribeTrafficSources"
}
export declare enum POSTDescribeTrafficSourcesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDescribeTrafficSourcesRequest extends SpeakeasyBase {
    action: POSTDescribeTrafficSourcesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeTrafficSourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeTrafficSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
