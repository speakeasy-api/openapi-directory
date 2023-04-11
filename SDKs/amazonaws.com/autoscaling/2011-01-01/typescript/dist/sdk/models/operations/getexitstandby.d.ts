import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETExitStandbyActionEnum {
    ExitStandby = "ExitStandby"
}
export declare enum GETExitStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETExitStandbyRequest extends SpeakeasyBase {
    action: GETExitStandbyActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    instanceIds?: string[];
    version: GETExitStandbyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETExitStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
