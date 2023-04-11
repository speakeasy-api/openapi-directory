import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteRepositoryXAmzTargetEnum {
    SpencerFrontendServiceDeleteRepository = "SpencerFrontendService.DeleteRepository"
}
export declare class DeleteRepositoryRequest extends SpeakeasyBase {
    deleteRepositoryRequest: shared.DeleteRepositoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteRepositoryXAmzTargetEnum;
}
export declare class DeleteRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteRepositoryResponse?: shared.DeleteRepositoryResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RepositoryNotEmptyException
     */
    repositoryNotEmptyException?: any;
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
    /**
     * UnsupportedCommandException
     */
    unsupportedCommandException?: any;
}
