import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLicenseConfigurationXAmzTargetEnum {
    AWSLicenseManagerDeleteLicenseConfiguration = "AWSLicenseManager.DeleteLicenseConfiguration"
}
export declare class DeleteLicenseConfigurationRequest extends SpeakeasyBase {
    deleteLicenseConfigurationRequest: shared.DeleteLicenseConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLicenseConfigurationXAmzTargetEnum;
}
export declare class DeleteLicenseConfigurationResponse extends SpeakeasyBase {
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
    deleteLicenseConfigurationResponse?: Record<string, any>;
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
     * ServerInternalException
     */
    serverInternalException?: any;
}
