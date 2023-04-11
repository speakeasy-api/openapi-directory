import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ExtendLicenseConsumptionXAmzTargetEnum {
    AWSLicenseManagerExtendLicenseConsumption = "AWSLicenseManager.ExtendLicenseConsumption"
}
export declare class ExtendLicenseConsumptionRequest extends SpeakeasyBase {
    extendLicenseConsumptionRequest: shared.ExtendLicenseConsumptionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ExtendLicenseConsumptionXAmzTargetEnum;
}
export declare class ExtendLicenseConsumptionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    contentType: string;
    /**
     * Success
     */
    extendLicenseConsumptionResponse?: shared.ExtendLicenseConsumptionResponse;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
