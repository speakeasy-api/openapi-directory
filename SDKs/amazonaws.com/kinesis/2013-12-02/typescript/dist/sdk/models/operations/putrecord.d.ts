import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRecordXAmzTargetEnum {
    Kinesis20131202PutRecord = "Kinesis_20131202.PutRecord"
}
export declare class PutRecordRequest extends SpeakeasyBase {
    putRecordInput: shared.PutRecordInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordXAmzTargetEnum;
}
export declare class PutRecordResponse extends SpeakeasyBase {
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
     * ProvisionedThroughputExceededException
     */
    provisionedThroughputExceededException?: any;
    /**
     * Success
     */
    putRecordOutput?: shared.PutRecordOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
