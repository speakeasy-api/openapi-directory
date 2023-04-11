import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTagsXAmzTargetEnum {
    AmazonML20141212DeleteTags = "AmazonML_20141212.DeleteTags"
}
export declare class DeleteTagsRequest extends SpeakeasyBase {
    deleteTagsInput: shared.DeleteTagsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTagsXAmzTargetEnum;
}
export declare class DeleteTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteTagsOutput?: shared.DeleteTagsOutput;
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
}
