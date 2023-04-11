import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateRepositoryXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921CreateRepository = "AmazonEC2ContainerRegistry_V20150921.CreateRepository"
}
export declare class CreateRepositoryRequest extends SpeakeasyBase {
    createRepositoryRequest: shared.CreateRepositoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateRepositoryXAmzTargetEnum;
}
export declare class CreateRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createRepositoryResponse?: shared.CreateRepositoryResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * InvalidTagParameterException
     */
    invalidTagParameterException?: any;
    /**
     * KmsException
     */
    kmsException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * RepositoryAlreadyExistsException
     */
    repositoryAlreadyExistsException?: any;
    /**
     * ServerException
     */
    serverException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
}
