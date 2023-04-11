import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTagsForDeliveryStreamXAmzTargetEnum {
    Firehose20150804ListTagsForDeliveryStream = "Firehose_20150804.ListTagsForDeliveryStream"
}
export declare class ListTagsForDeliveryStreamRequest extends SpeakeasyBase {
    listTagsForDeliveryStreamInput: shared.ListTagsForDeliveryStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTagsForDeliveryStreamXAmzTargetEnum;
}
export declare class ListTagsForDeliveryStreamResponse extends SpeakeasyBase {
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
    listTagsForDeliveryStreamOutput?: shared.ListTagsForDeliveryStreamOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
