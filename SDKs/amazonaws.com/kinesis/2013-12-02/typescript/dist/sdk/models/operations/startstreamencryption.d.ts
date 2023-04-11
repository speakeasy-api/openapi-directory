import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartStreamEncryptionXAmzTargetEnum {
    Kinesis20131202StartStreamEncryption = "Kinesis_20131202.StartStreamEncryption"
}
export declare class StartStreamEncryptionRequest extends SpeakeasyBase {
    startStreamEncryptionInput: shared.StartStreamEncryptionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartStreamEncryptionXAmzTargetEnum;
}
export declare class StartStreamEncryptionResponse extends SpeakeasyBase {
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
     * KMSAccessDeniedException
     */
    kmsAccessDeniedException?: any;
    /**
     * KMSDisabledException
     */
    kmsDisabledException?: any;
    /**
     * KMSInvalidStateException
     */
    kmsInvalidStateException?: any;
    /**
     * KMSNotFoundException
     */
    kmsNotFoundException?: any;
    /**
     * KMSOptInRequired
     */
    kmsOptInRequired?: any;
    /**
     * KMSThrottlingException
     */
    kmsThrottlingException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
}
