import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateAutoScalingGroupActionEnum {
    UpdateAutoScalingGroup = "UpdateAutoScalingGroup"
}
export declare enum POSTUpdateAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTUpdateAutoScalingGroupRequest extends SpeakeasyBase {
    action: POSTUpdateAutoScalingGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateAutoScalingGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
