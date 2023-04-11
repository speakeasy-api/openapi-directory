import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeNetworkInterfaceAttributeActionEnum {
    DescribeNetworkInterfaceAttribute = "DescribeNetworkInterfaceAttribute"
}
export declare enum POSTDescribeNetworkInterfaceAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeNetworkInterfaceAttributeRequest extends SpeakeasyBase {
    action: POSTDescribeNetworkInterfaceAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeNetworkInterfaceAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeNetworkInterfaceAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
