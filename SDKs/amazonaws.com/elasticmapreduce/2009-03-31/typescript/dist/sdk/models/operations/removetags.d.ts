import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RemoveTagsXAmzTargetEnum {
    ElasticMapReduceRemoveTags = "ElasticMapReduce.RemoveTags"
}
export declare class RemoveTagsRequest extends SpeakeasyBase {
    removeTagsInput: shared.RemoveTagsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveTagsXAmzTargetEnum;
}
export declare class RemoveTagsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * Success
     */
    removeTagsOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
