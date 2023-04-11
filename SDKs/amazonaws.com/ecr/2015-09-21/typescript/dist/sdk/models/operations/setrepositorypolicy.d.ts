import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetRepositoryPolicyXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921SetRepositoryPolicy = "AmazonEC2ContainerRegistry_V20150921.SetRepositoryPolicy"
}
export declare class SetRepositoryPolicyRequest extends SpeakeasyBase {
    setRepositoryPolicyRequest: shared.SetRepositoryPolicyRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetRepositoryPolicyXAmzTargetEnum;
}
export declare class SetRepositoryPolicyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RepositoryNotFoundException
     */
    repositoryNotFoundException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    /**
     * Success
     */
    setRepositoryPolicyResponse?: shared.SetRepositoryPolicyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
