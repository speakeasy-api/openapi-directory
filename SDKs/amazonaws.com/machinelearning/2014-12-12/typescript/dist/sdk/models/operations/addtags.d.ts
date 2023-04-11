import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsXAmzTargetEnum {
    AmazonML20141212AddTags = "AmazonML_20141212.AddTags"
}
export declare class AddTagsRequest extends SpeakeasyBase {
    addTagsInput: shared.AddTagsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AddTagsXAmzTargetEnum;
}
export declare class AddTagsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    addTagsOutput?: shared.AddTagsOutput;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidTagException
     */
    invalidTagException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TagLimitExceededException
     */
    tagLimitExceededException?: any;
}
