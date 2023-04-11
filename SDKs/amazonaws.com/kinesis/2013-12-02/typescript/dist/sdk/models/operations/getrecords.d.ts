import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetRecordsXAmzTargetEnum {
    Kinesis20131202GetRecords = "Kinesis_20131202.GetRecords"
}
export declare class GetRecordsRequest extends SpeakeasyBase {
    getRecordsInput: shared.GetRecordsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetRecordsXAmzTargetEnum;
}
export declare class GetRecordsResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * ExpiredIteratorException
     */
    expiredIteratorException?: any;
    /**
     * Success
     */
    getRecordsOutput?: shared.GetRecordsOutput;
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
