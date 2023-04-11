import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRepositoryCatalogDataXAmzTargetEnum {
    SpencerFrontendServiceGetRepositoryCatalogData = "SpencerFrontendService.GetRepositoryCatalogData"
}
export declare class GetRepositoryCatalogDataRequest extends SpeakeasyBase {
    getRepositoryCatalogDataRequest: shared.GetRepositoryCatalogDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRepositoryCatalogDataXAmzTargetEnum;
}
export declare class GetRepositoryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getRepositoryCatalogDataResponse?: shared.GetRepositoryCatalogDataResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * RepositoryCatalogDataNotFoundException
     */
    repositoryCatalogDataNotFoundException?: any;
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
