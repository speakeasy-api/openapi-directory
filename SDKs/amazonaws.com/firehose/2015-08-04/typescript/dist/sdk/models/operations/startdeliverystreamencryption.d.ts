import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartDeliveryStreamEncryptionXAmzTargetEnum {
    Firehose20150804StartDeliveryStreamEncryption = "Firehose_20150804.StartDeliveryStreamEncryption"
}
export declare class StartDeliveryStreamEncryptionRequest extends SpeakeasyBase {
    startDeliveryStreamEncryptionInput: shared.StartDeliveryStreamEncryptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartDeliveryStreamEncryptionXAmzTargetEnum;
}
export declare class StartDeliveryStreamEncryptionResponse extends SpeakeasyBase {
    contentType: string;
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
    startDeliveryStreamEncryptionOutput?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
