import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAttachInstancesActionEnum {
    AttachInstances = "AttachInstances"
}
export declare enum GETAttachInstancesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class GETAttachInstancesRequest extends SpeakeasyBase {
    action: GETAttachInstancesActionEnum;
    /**
     * The name of the Auto Scaling group.
     */
    autoScalingGroupName: string;
    /**
     * The IDs of the instances. You can specify up to 20 instances.
     */
    instanceIds?: string[];
    version: GETAttachInstancesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAttachInstancesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
