import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETEnterStandbyActionEnum {
    EnterStandby = "EnterStandby"
}
export declare enum GETEnterStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETEnterStandbyRequest extends SpeakeasyBase {
    action: GETEnterStandbyActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    instanceIds?: string[];
    /**
     * Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to <code>Standby</code> mode.
     */
    shouldDecrementDesiredCapacity: boolean;
    version: GETEnterStandbyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETEnterStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
