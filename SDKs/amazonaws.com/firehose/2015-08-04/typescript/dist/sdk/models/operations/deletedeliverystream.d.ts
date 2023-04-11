import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDeliveryStreamXAmzTargetEnum {
    Firehose20150804DeleteDeliveryStream = "Firehose_20150804.DeleteDeliveryStream"
}
export declare class DeleteDeliveryStreamRequest extends SpeakeasyBase {
    deleteDeliveryStreamInput: shared.DeleteDeliveryStreamInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeliveryStreamXAmzTargetEnum;
}
export declare class DeleteDeliveryStreamResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDeliveryStreamOutput?: Record<string, any>;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
}
