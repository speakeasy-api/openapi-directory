import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLifecyclePolicyPreviewXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921GetLifecyclePolicyPreview = "AmazonEC2ContainerRegistry_V20150921.GetLifecyclePolicyPreview"
}
export declare class GetLifecyclePolicyPreviewRequest extends SpeakeasyBase {
    getLifecyclePolicyPreviewRequest: shared.GetLifecyclePolicyPreviewRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLifecyclePolicyPreviewXAmzTargetEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
}
export declare class GetLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLifecyclePolicyPreviewResponse?: shared.GetLifecyclePolicyPreviewResponse;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LifecyclePolicyPreviewNotFoundException
     */
    lifecyclePolicyPreviewNotFoundException?: any;
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
