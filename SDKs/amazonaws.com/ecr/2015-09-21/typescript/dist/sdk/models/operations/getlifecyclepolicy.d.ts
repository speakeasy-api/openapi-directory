import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicy"
}
export declare class GetLifecyclePolicyRequest extends SpeakeasyBase {
    getLifecyclePolicyRequest: shared.GetLifecyclePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLifecyclePolicyXAmzTargetEnum;
}
export declare class GetLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLifecyclePolicyResponse?: shared.GetLifecyclePolicyResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LifecyclePolicyNotFoundException
     */
    lifecyclePolicyNotFoundException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
