import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartLifecyclePolicyPreviewXAmzTargetEnum {
    AmazonEc2ContainerRegistryV20150921StartLifecyclePolicyPreview = "AmazonEC2ContainerRegistry_V20150921.StartLifecyclePolicyPreview"
}
export declare class StartLifecyclePolicyPreviewRequest extends SpeakeasyBase {
    startLifecyclePolicyPreviewRequest: shared.StartLifecyclePolicyPreviewRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartLifecyclePolicyPreviewXAmzTargetEnum;
}
export declare class StartLifecyclePolicyPreviewResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * LifecyclePolicyNotFoundException
     */
    lifecyclePolicyNotFoundException?: any;
    /**
     * LifecyclePolicyPreviewInProgressException
     */
    lifecyclePolicyPreviewInProgressException?: any;
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
    startLifecyclePolicyPreviewResponse?: shared.StartLifecyclePolicyPreviewResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
