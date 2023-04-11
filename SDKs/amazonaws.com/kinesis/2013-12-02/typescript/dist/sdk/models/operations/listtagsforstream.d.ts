import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForStreamXAmzTargetEnum {
    Kinesis20131202ListTagsForStream = "Kinesis_20131202.ListTagsForStream"
}
export declare class ListTagsForStreamRequest extends SpeakeasyBase {
    listTagsForStreamInput: shared.ListTagsForStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForStreamXAmzTargetEnum;
}
export declare class ListTagsForStreamResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listTagsForStreamOutput?: shared.ListTagsForStreamOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
