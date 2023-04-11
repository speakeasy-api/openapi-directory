import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRepositoryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetRepositoryPolicy = "AmazonEC2ContainerRegistry_V20150921.GetRepositoryPolicy"
}
export declare class GetRepositoryPolicyRequest extends SpeakeasyBase {
    getRepositoryPolicyRequest: shared.GetRepositoryPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositoryPolicyXAmzTargetEnum;
}
export declare class GetRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRepositoryPolicyResponse?: shared.GetRepositoryPolicyResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    /**
     * RepositoryPolicyNotFoundException
     */
    repositoryPolicyNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
