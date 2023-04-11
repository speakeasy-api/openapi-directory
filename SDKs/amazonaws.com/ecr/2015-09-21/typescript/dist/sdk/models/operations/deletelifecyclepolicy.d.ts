import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteLifecyclePolicy"
}
export declare class DeleteLifecyclePolicyRequest extends SpeakeasyBase {
    deleteLifecyclePolicyRequest: shared.DeleteLifecyclePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLifecyclePolicyXAmzTargetEnum;
}
export declare class DeleteLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLifecyclePolicyResponse?: shared.DeleteLifecyclePolicyResponse;
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
