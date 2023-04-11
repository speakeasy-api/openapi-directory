import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeVolumeAttributeActionEnum {
    DescribeVolumeAttribute = "DescribeVolumeAttribute"
}
export declare enum POSTDescribeVolumeAttributeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDescribeVolumeAttributeRequest extends SpeakeasyBase {
    action: POSTDescribeVolumeAttributeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeVolumeAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeVolumeAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
