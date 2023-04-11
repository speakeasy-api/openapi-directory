import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeTableReplicaAutoScalingXAmzTargetEnum {
    DynamoDB20120810DescribeTableReplicaAutoScaling = "DynamoDB_20120810.DescribeTableReplicaAutoScaling"
}
export declare class DescribeTableReplicaAutoScalingRequest extends SpeakeasyBase {
    describeTableReplicaAutoScalingInput: shared.DescribeTableReplicaAutoScalingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTableReplicaAutoScalingXAmzTargetEnum;
}
export declare class DescribeTableReplicaAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeTableReplicaAutoScalingOutput?: shared.DescribeTableReplicaAutoScalingOutput;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
