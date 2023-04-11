import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsXAmzTargetEnum {
    SageMakerListTags = "SageMaker.ListTags"
}
export declare class ListTagsRequest extends SpeakeasyBase {
    listTagsInput: shared.ListTagsInput;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsXAmzTargetEnum;
}
export declare class ListTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listTagsOutput?: shared.ListTagsOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
