import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTagsXAmzTargetEnum {
    WorkspacesServiceCreateTags = "WorkspacesService.CreateTags"
}
export declare class CreateTagsRequest extends SpeakeasyBase {
    createTagsRequest: shared.CreateTagsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTagsXAmzTargetEnum;
}
export declare class CreateTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createTagsResult?: Record<string, any>;
    /**
     * InvalidParameterValuesException
     */
    invalidParameterValuesException?: any;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
