import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagResourcesXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126UntagResources = "ResourceGroupsTaggingAPI_20170126.UntagResources"
}
export declare class UntagResourcesRequest extends SpeakeasyBase {
    untagResourcesInput: shared.UntagResourcesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagResourcesXAmzTargetEnum;
}
export declare class UntagResourcesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottledException
     */
    throttledException?: any;
    /**
     * Success
     */
    untagResourcesOutput?: shared.UntagResourcesOutput;
}
