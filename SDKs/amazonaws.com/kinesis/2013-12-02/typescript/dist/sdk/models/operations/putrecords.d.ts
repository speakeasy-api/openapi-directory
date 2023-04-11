import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRecordsXAmzTargetEnum {
    Kinesis20131202PutRecords = "Kinesis_20131202.PutRecords"
}
export declare class PutRecordsRequest extends SpeakeasyBase {
    putRecordsInput: shared.PutRecordsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRecordsXAmzTargetEnum;
}
export declare class PutRecordsResponse extends SpeakeasyBase {
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
    putRecordsOutput?: shared.PutRecordsOutput;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
