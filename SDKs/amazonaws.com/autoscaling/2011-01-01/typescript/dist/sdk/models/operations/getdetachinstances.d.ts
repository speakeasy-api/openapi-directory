import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDetachInstancesActionEnum {
    DetachInstances = "DetachInstances"
}
export declare enum GETDetachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETDetachInstancesRequest extends SpeakeasyBase {
    action: GETDetachInstancesActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    instanceIds?: string[];
    /**
     * Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.
     */
    shouldDecrementDesiredCapacity: boolean;
    version: GETDetachInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDetachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
