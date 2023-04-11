import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETTerminateInstanceInAutoScalingGroupActionEnum {
    TerminateInstanceInAutoScalingGroup = "TerminateInstanceInAutoScalingGroup"
}
export declare enum GETTerminateInstanceInAutoScalingGroupVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETTerminateInstanceInAutoScalingGroupRequest extends SpeakeasyBase {
    action: GETTerminateInstanceInAutoScalingGroupActionEnum;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    /**
     * Indicates whether terminating the instance also decrements the size of the Auto Scaling group.
     */
    shouldDecrementDesiredCapacity: boolean;
    version: GETTerminateInstanceInAutoScalingGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETTerminateInstanceInAutoScalingGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
