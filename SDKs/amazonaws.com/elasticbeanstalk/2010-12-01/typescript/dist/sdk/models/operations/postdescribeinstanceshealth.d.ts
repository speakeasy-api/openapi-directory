import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeInstancesHealthActionEnum {
    DescribeInstancesHealth = "DescribeInstancesHealth"
}
export declare enum POSTDescribeInstancesHealthVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDescribeInstancesHealthRequest extends SpeakeasyBase {
    action: POSTDescribeInstancesHealthActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeInstancesHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeInstancesHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
