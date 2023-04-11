import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourcePolicyXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicy = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy"
}
export declare class DeleteResourcePolicyRequest extends SpeakeasyBase {
    deleteResourcePolicyRequest: shared.DeleteResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourcePolicyXAmzTargetEnum;
}
export declare class DeleteResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourcePolicyResponse?: Record<string, any>;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * ResourceARNNotValidException
     */
    resourceARNNotValidException?: any;
    /**
     * ResourcePolicyNotFoundException
     */
    resourcePolicyNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ResourceTypeNotSupportedException
     */
    resourceTypeNotSupportedException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
