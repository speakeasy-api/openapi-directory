import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AddTagsXAmzTargetEnum {
    SageMakerAddTags = "SageMaker.AddTags"
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
