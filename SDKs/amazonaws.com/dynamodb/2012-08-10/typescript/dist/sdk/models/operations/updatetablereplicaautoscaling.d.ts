import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTableReplicaAutoScalingXAmzTargetEnum {
    DynamoDB20120810UpdateTableReplicaAutoScaling = "DynamoDB_20120810.UpdateTableReplicaAutoScaling"
}
export declare class UpdateTableReplicaAutoScalingRequest extends SpeakeasyBase {
    updateTableReplicaAutoScalingInput: shared.UpdateTableReplicaAutoScalingInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTableReplicaAutoScalingXAmzTargetEnum;
}
export declare class UpdateTableReplicaAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    updateTableReplicaAutoScalingOutput?: shared.UpdateTableReplicaAutoScalingOutput;
}
