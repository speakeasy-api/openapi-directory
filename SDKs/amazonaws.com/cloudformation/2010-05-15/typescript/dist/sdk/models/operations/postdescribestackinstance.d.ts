import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeStackInstanceActionEnum {
    DescribeStackInstance = "DescribeStackInstance"
}
export declare enum POSTDescribeStackInstanceVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDescribeStackInstanceRequest extends SpeakeasyBase {
    action: POSTDescribeStackInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeStackInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeStackInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
