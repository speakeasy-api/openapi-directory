import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
 */
export declare enum PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum {
    UseDefaultValue = "USE_DEFAULT_VALUE",
    RejectMessage = "REJECT_MESSAGE"
}
export declare class PutEmailIdentityMailFromAttributesRequestBody extends SpeakeasyBase {
    /**
     * <p>The action that you want Amazon Pinpoint to take if it can't read the required MX record for a custom MAIL FROM domain. When you set this value to <code>UseDefaultValue</code>, Amazon Pinpoint uses <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, Amazon Pinpoint returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
     */
    behaviorOnMxFailure?: PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;
    /**
     * The domain that you want to use as a MAIL FROM domain.
     */
    mailFromDomain?: string;
}
export declare class PutEmailIdentityMailFromAttributesRequest extends SpeakeasyBase {
    /**
     * The verified email identity that you want to set up the custom MAIL FROM domain for.
     */
    emailIdentity: string;
    requestBody: PutEmailIdentityMailFromAttributesRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutEmailIdentityMailFromAttributesResponse extends SpeakeasyBase {
    /**
     * BadRequestException
     */
    badRequestException?: any;
    contentType: string;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    /**
     * Success
     */
    putEmailIdentityMailFromAttributesResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
