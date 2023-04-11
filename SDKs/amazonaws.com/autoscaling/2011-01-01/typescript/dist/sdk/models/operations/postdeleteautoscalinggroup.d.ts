import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteAutoScalingGroupActionEnum {
    DeleteAutoScalingGroup = "DeleteAutoScalingGroup"
}
export declare enum POSTDeleteAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDeleteAutoScalingGroupRequest extends SpeakeasyBase {
    action: POSTDeleteAutoScalingGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteAutoScalingGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
