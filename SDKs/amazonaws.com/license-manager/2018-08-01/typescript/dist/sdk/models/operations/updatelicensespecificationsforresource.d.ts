import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateLicenseSpecificationsForResourceXAmzTargetEnum {
    AWSLicenseManagerUpdateLicenseSpecificationsForResource = "AWSLicenseManager.UpdateLicenseSpecificationsForResource"
}
export declare class UpdateLicenseSpecificationsForResourceRequest extends SpeakeasyBase {
    updateLicenseSpecificationsForResourceRequest: shared.UpdateLicenseSpecificationsForResourceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateLicenseSpecificationsForResourceXAmzTargetEnum;
}
export declare class UpdateLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
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
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidResourceStateException
     */
    invalidResourceStateException?: any;
    /**
     * LicenseUsageException
     */
    licenseUsageException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * Success
     */
    updateLicenseSpecificationsForResourceResponse?: Record<string, any>;
}
