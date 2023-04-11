import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagResourcesXAmzTargetEnum {
    ResourceGroupsTaggingAPI20170126TagResources = "ResourceGroupsTaggingAPI_20170126.TagResources"
}
export declare class TagResourcesRequest extends SpeakeasyBase {
    tagResourcesInput: shared.TagResourcesInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagResourcesXAmzTargetEnum;
}
export declare class TagResourcesResponse extends SpeakeasyBase {
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
     * Success
     */
    tagResourcesOutput?: shared.TagResourcesOutput;
    /**
     * ThrottledException
     */
    throttledException?: any;
}
