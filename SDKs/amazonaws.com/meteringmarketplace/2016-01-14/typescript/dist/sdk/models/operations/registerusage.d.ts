import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterUsageXAmzTargetEnum {
    AWSMPMeteringServiceRegisterUsage = "AWSMPMeteringService.RegisterUsage"
}
export declare class RegisterUsageRequest extends SpeakeasyBase {
    registerUsageRequest: shared.RegisterUsageRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterUsageXAmzTargetEnum;
}
export declare class RegisterUsageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomerNotEntitledException
     */
    customerNotEntitledException?: any;
    /**
     * DisabledApiException
     */
    disabledApiException?: any;
    /**
     * InternalServiceErrorException
     */
    internalServiceErrorException?: any;
    /**
     * InvalidProductCodeException
     */
    invalidProductCodeException?: any;
    /**
     * InvalidPublicKeyVersionException
     */
    invalidPublicKeyVersionException?: any;
    /**
     * InvalidRegionException
     */
    invalidRegionException?: any;
    /**
     * PlatformNotSupportedException
     */
    platformNotSupportedException?: any;
    /**
     * Success
     */
    registerUsageResult?: shared.RegisterUsageResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
