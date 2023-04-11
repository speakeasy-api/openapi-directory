import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateAutoScalingGroupActionEnum {
    CreateAutoScalingGroup = "CreateAutoScalingGroup"
}
export declare enum POSTCreateAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTCreateAutoScalingGroupRequest extends SpeakeasyBase {
    action: POSTCreateAutoScalingGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateAutoScalingGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
