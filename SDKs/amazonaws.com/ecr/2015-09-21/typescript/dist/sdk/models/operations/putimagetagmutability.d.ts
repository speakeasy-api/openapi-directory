import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutImageTagMutabilityXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921PutImageTagMutability = "AmazonEC2ContainerRegistry_V20150921.PutImageTagMutability"
}
export declare class PutImageTagMutabilityRequest extends SpeakeasyBase {
    putImageTagMutabilityRequest: shared.PutImageTagMutabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutImageTagMutabilityXAmzTargetEnum;
}
export declare class PutImageTagMutabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putImageTagMutabilityResponse?: shared.PutImageTagMutabilityResponse;
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
