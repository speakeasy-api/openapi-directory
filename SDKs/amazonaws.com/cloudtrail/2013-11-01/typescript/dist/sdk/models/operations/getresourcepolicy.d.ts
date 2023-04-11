import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetResourcePolicyXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicy = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy"
}
export declare class GetResourcePolicyRequest extends SpeakeasyBase {
    getResourcePolicyRequest: shared.GetResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetResourcePolicyXAmzTargetEnum;
}
export declare class GetResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getResourcePolicyResponse?: shared.GetResourcePolicyResponse;
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
