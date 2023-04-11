import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRegistryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutRegistryPolicy = "AmazonEC2ContainerRegistry_V20150921.PutRegistryPolicy"
}
export declare class PutRegistryPolicyRequest extends SpeakeasyBase {
    putRegistryPolicyRequest: shared.PutRegistryPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRegistryPolicyXAmzTargetEnum;
}
export declare class PutRegistryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putRegistryPolicyResponse?: shared.PutRegistryPolicyResponse;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
