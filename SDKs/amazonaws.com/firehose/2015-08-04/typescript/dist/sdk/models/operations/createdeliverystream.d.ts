import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDeliveryStreamXAmzTargetEnum {
    Firehose20150804CreateDeliveryStream = "Firehose_20150804.CreateDeliveryStream"
}
export declare class CreateDeliveryStreamRequest extends SpeakeasyBase {
    createDeliveryStreamInput: shared.CreateDeliveryStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeliveryStreamXAmzTargetEnum;
}
export declare class CreateDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDeliveryStreamOutput?: shared.CreateDeliveryStreamOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * InvalidKMSResourceException
     */
    invalidKMSResourceException?: any;
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
}
