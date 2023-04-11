import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRepositoryCatalogDataXAmzTargetEnum {
    SpencerFrontendServicePutRepositoryCatalogData = "SpencerFrontendService.PutRepositoryCatalogData"
}
export declare class PutRepositoryCatalogDataRequest extends SpeakeasyBase {
    putRepositoryCatalogDataRequest: shared.PutRepositoryCatalogDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRepositoryCatalogDataXAmzTargetEnum;
}
export declare class PutRepositoryCatalogDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    putRepositoryCatalogDataResponse?: shared.PutRepositoryCatalogDataResponse;
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
