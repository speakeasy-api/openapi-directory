import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRepositoryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921DeleteRepositoryPolicy = "AmazonEC2ContainerRegistry_V20150921.DeleteRepositoryPolicy"
}
export declare class DeleteRepositoryPolicyRequest extends SpeakeasyBase {
    deleteRepositoryPolicyRequest: shared.DeleteRepositoryPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRepositoryPolicyXAmzTargetEnum;
}
export declare class DeleteRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRepositoryPolicyResponse?: shared.DeleteRepositoryPolicyResponse;
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
