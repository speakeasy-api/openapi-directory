import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AcceptGrantXAmzTargetEnum {
    AWSLicenseManagerAcceptGrant = "AWSLicenseManager.AcceptGrant"
}
export declare class AcceptGrantRequest extends SpeakeasyBase {
    acceptGrantRequest: shared.AcceptGrantRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptGrantXAmzTargetEnum;
}
export declare class AcceptGrantResponse extends SpeakeasyBase {
    /**
     * Success
     */
    acceptGrantResponse?: shared.AcceptGrantResponse;
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
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
