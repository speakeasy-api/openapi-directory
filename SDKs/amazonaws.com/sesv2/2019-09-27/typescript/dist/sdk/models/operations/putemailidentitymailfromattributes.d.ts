import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * <p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
 */
export declare enum PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum {
    UseDefaultValue = "USE_DEFAULT_VALUE",
    RejectMessage = "REJECT_MESSAGE"
}
export declare class PutEmailIdentityMailFromAttributesRequestBody extends SpeakeasyBase {
    /**
     * <p>The action to take if the required MX record can't be found when you send an email. When you set this value to <code>UseDefaultValue</code>, the mail is sent using <i>amazonses.com</i> as the MAIL FROM domain. When you set this value to <code>RejectMessage</code>, the Amazon SES API v2 returns a <code>MailFromDomainNotVerified</code> error, and doesn't attempt to deliver the email.</p> <p>These behaviors are taken when the custom MAIL FROM domain configuration is in the <code>Pending</code>, <code>Failed</code>, and <code>TemporaryFailure</code> states.</p>
     */
    behaviorOnMxFailure?: PutEmailIdentityMailFromAttributesRequestBodyBehaviorOnMxFailureEnum;
    /**
     * The domain to use as a MAIL FROM domain.
     */
    mailFromDomain?: string;
}
export declare class PutEmailIdentityMailFromAttributesRequest extends SpeakeasyBase {
    /**
     * The verified email identity.
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
