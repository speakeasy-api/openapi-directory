import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum MeterUsageXAmzTargetEnum {
    AWSMPMeteringServiceMeterUsage = "AWSMPMeteringService.MeterUsage"
}
export declare class MeterUsageRequest extends SpeakeasyBase {
    meterUsageRequest: shared.MeterUsageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: MeterUsageXAmzTargetEnum;
}
export declare class MeterUsageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomerNotEntitledException
     */
    customerNotEntitledException?: any;
    /**
     * DuplicateRequestException
     */
    duplicateRequestException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidEndpointRegionException
     */
    invalidEndpointRegionException?: any;
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
    /**
     * Success
     */
    meterUsageResult?: shared.MeterUsageResult;
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
