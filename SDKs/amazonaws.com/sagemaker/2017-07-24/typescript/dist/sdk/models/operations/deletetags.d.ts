import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTagsXAmzTargetEnum {
    SageMakerDeleteTags = "SageMaker.DeleteTags"
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
    deleteTagsOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
