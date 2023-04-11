import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeScalingProcessTypesActionEnum {
    DescribeScalingProcessTypes = "DescribeScalingProcessTypes"
}
export declare enum GETDescribeScalingProcessTypesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDescribeScalingProcessTypesRequest extends SpeakeasyBase {
    action: GETDescribeScalingProcessTypesActionEnum;
    version: GETDescribeScalingProcessTypesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeScalingProcessTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
