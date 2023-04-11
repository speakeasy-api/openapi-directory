import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutResourcePolicyXAmzTargetEnum {
    ComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicy = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy"
}
export declare class PutResourcePolicyRequest extends SpeakeasyBase {
    putResourcePolicyRequest: shared.PutResourcePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutResourcePolicyXAmzTargetEnum;
}
export declare class PutResourcePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OperationNotPermittedException
     */
    operationNotPermittedException?: any;
    /**
     * Success
     */
    putResourcePolicyResponse?: shared.PutResourcePolicyResponse;
    /**
     * ResourceARNNotValidException
     */
    resourceARNNotValidException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourcePolicyNotValidException
     */
    resourcePolicyNotValidException?: any;
    /**
     * ResourceTypeNotSupportedException
     */
    resourceTypeNotSupportedException?: any;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
