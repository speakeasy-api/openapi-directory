import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CheckoutLicenseXAmzTargetEnum {
    AWSLicenseManagerCheckoutLicense = "AWSLicenseManager.CheckoutLicense"
}
export declare class CheckoutLicenseRequest extends SpeakeasyBase {
    checkoutLicenseRequest: shared.CheckoutLicenseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckoutLicenseXAmzTargetEnum;
}
export declare class CheckoutLicenseResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    /**
     * Success
     */
    checkoutLicenseResponse?: shared.CheckoutLicenseResponse;
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * NoEntitlementsAllowedException
     */
    noEntitlementsAllowedException?: any;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    /**
     * RedirectException
     */
    redirectException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * UnsupportedDigitalSignatureMethodException
     */
    unsupportedDigitalSignatureMethodException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
