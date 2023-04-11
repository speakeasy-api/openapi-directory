import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchMeterUsageXAmzTargetEnum {
    AWSMPMeteringServiceBatchMeterUsage = "AWSMPMeteringService.BatchMeterUsage"
}
export declare class BatchMeterUsageRequest extends SpeakeasyBase {
    batchMeterUsageRequest: shared.BatchMeterUsageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchMeterUsageXAmzTargetEnum;
}
export declare class BatchMeterUsageResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchMeterUsageResult?: shared.BatchMeterUsageResult;
    contentType: string;
    /**
     * DisabledApiException
     */
    disabledApiException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidCustomerIdentifierException
     */
    invalidCustomerIdentifierException?: any;
    /**
     * InvalidProductCodeException
     */
    invalidProductCodeException?: any;
    /**
     * InvalidTagException
     */
    invalidTagException?: any;
    /**
     * InvalidUsageAllocationsException
     */
    invalidUsageAllocationsException?: any;
    /**
     * InvalidUsageDimensionException
     */
    invalidUsageDimensionException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * TimestampOutOfBoundsException
     */
    timestampOutOfBoundsException?: any;
}
