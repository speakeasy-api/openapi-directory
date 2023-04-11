import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopDeliveryStreamEncryptionXAmzTargetEnum {
    Firehose20150804StopDeliveryStreamEncryption = "Firehose_20150804.StopDeliveryStreamEncryption"
}
export declare class StopDeliveryStreamEncryptionRequest extends SpeakeasyBase {
    stopDeliveryStreamEncryptionInput: shared.StopDeliveryStreamEncryptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopDeliveryStreamEncryptionXAmzTargetEnum;
}
export declare class StopDeliveryStreamEncryptionResponse extends SpeakeasyBase {
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
    stopDeliveryStreamEncryptionOutput?: Record<string, any>;
}
