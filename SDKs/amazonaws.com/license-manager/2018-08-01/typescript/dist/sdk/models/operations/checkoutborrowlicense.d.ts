import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CheckoutBorrowLicenseXAmzTargetEnum {
    AWSLicenseManagerCheckoutBorrowLicense = "AWSLicenseManager.CheckoutBorrowLicense"
}
export declare class CheckoutBorrowLicenseRequest extends SpeakeasyBase {
    checkoutBorrowLicenseRequest: shared.CheckoutBorrowLicenseRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckoutBorrowLicenseXAmzTargetEnum;
}
export declare class CheckoutBorrowLicenseResponse extends SpeakeasyBase {
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
    checkoutBorrowLicenseResponse?: shared.CheckoutBorrowLicenseResponse;
    contentType: string;
    /**
     * EntitlementNotAllowedException
     */
    entitlementNotAllowedException?: any;
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
