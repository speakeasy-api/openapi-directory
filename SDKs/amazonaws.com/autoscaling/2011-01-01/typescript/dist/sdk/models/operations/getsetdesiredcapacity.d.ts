import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETSetDesiredCapacityActionEnum {
    SetDesiredCapacity = "SetDesiredCapacity"
}
export declare enum GETSetDesiredCapacityVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETSetDesiredCapacityRequest extends SpeakeasyBase {
    action: GETSetDesiredCapacityActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.
     */
    desiredCapacity: number;
    /**
     * Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.
     */
    honorCooldown?: boolean;
    version: GETSetDesiredCapacityVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETSetDesiredCapacityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
