import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsToResourceXAmzTargetEnum {
    DirectoryService20150416AddTagsToResource = "DirectoryService_20150416.AddTagsToResource"
}
export declare class AddTagsToResourceRequest extends SpeakeasyBase {
    addTagsToResourceRequest: shared.AddTagsToResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsToResourceXAmzTargetEnum;
}
export declare class AddTagsToResourceResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addTagsToResourceResult?: Record<string, any>;
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * TagLimitExceededException
     */
    tagLimitExceededException?: any;
}
