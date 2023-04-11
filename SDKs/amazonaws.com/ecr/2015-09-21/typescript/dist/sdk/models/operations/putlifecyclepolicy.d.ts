import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutLifecyclePolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutLifecyclePolicy = "AmazonEC2ContainerRegistry_V20150921.PutLifecyclePolicy"
}
export declare class PutLifecyclePolicyRequest extends SpeakeasyBase {
    putLifecyclePolicyRequest: shared.PutLifecyclePolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLifecyclePolicyXAmzTargetEnum;
}
export declare class PutLifecyclePolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putLifecyclePolicyResponse?: shared.PutLifecyclePolicyResponse;
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
