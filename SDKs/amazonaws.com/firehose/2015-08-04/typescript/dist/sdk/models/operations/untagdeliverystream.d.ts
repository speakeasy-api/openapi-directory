import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UntagDeliveryStreamXAmzTargetEnum {
    Firehose20150804UntagDeliveryStream = "Firehose_20150804.UntagDeliveryStream"
}
export declare class UntagDeliveryStreamRequest extends SpeakeasyBase {
    untagDeliveryStreamInput: shared.UntagDeliveryStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UntagDeliveryStreamXAmzTargetEnum;
}
export declare class UntagDeliveryStreamResponse extends SpeakeasyBase {
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
    untagDeliveryStreamOutput?: Record<string, any>;
}
