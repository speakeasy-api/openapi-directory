import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETUpdateScalingParametersActionEnum {
    UpdateScalingParameters = "UpdateScalingParameters"
}
/**
 * The desired instance type and desired number of replicas of each index partition.
 */
export declare class GETUpdateScalingParametersScalingParameters extends SpeakeasyBase {
    desiredInstanceType?: shared.PartitionInstanceTypeEnum;
    desiredPartitionCount?: number;
    desiredReplicationCount?: number;
}
export declare enum GETUpdateScalingParametersVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETUpdateScalingParametersRequest extends SpeakeasyBase {
    action: GETUpdateScalingParametersActionEnum;
    domainName: string;
    /**
     * The desired instance type and desired number of replicas of each index partition.
     */
    scalingParameters: GETUpdateScalingParametersScalingParameters;
    version: GETUpdateScalingParametersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateScalingParametersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
