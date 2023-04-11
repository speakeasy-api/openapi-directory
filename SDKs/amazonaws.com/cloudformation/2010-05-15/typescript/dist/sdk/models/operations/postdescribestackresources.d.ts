import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeStackResourcesActionEnum {
    DescribeStackResources = "DescribeStackResources"
}
export declare enum POSTDescribeStackResourcesVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeStackResourcesRequest extends SpeakeasyBase {
    action: POSTDescribeStackResourcesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeStackResourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeStackResourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
