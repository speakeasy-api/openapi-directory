import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum TagDeliveryStreamXAmzTargetEnum {
    Firehose20150804TagDeliveryStream = "Firehose_20150804.TagDeliveryStream"
}
export declare class TagDeliveryStreamRequest extends SpeakeasyBase {
    tagDeliveryStreamInput: shared.TagDeliveryStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TagDeliveryStreamXAmzTargetEnum;
}
export declare class TagDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    tagDeliveryStreamOutput?: Record<string, any>;
}
