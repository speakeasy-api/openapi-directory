import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Used to associate a configuration set with a dedicated IP pool.
 */
export declare class CreateConfigurationSetRequestBodyDeliveryOptions extends SpeakeasyBase {
    sendingPoolName?: string;
    tlsPolicy?: shared.TlsPolicyEnum;
}
/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.
 */
export declare class CreateConfigurationSetRequestBodyReputationOptions extends SpeakeasyBase {
    lastFreshStart?: Date;
    reputationMetricsEnabled?: boolean;
}
/**
 * Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.
 */
export declare class CreateConfigurationSetRequestBodySendingOptions extends SpeakeasyBase {
    sendingEnabled?: boolean;
}
/**
 * An object that contains information about the suppression list preferences for your account.
 */
export declare class CreateConfigurationSetRequestBodySuppressionOptions extends SpeakeasyBase {
    suppressedReasons?: shared.SuppressionListReasonEnum[];
}
/**
 * <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
 */
export declare class CreateConfigurationSetRequestBodyTrackingOptions extends SpeakeasyBase {
    customRedirectDomain?: string;
}
/**
 * An object that defines the VDM settings that apply to emails that you send using the configuration set.
 */
export declare class CreateConfigurationSetRequestBodyVdmOptions extends SpeakeasyBase {
    dashboardOptions?: shared.DashboardOptions;
    guardianOptions?: shared.GuardianOptions;
}
export declare class CreateConfigurationSetRequestBody extends SpeakeasyBase {
    /**
     * <p>The name of a configuration set.</p> <p> <i>Configuration sets</i> are groups of rules that you can apply to the emails you send. You apply a configuration set to an email by including a reference to the configuration set in the headers of the email. When you apply a configuration set to an email, all of the rules in that configuration set are applied to the email.</p>
     */
    configurationSetName: string;
    /**
     * Used to associate a configuration set with a dedicated IP pool.
     */
    deliveryOptions?: CreateConfigurationSetRequestBodyDeliveryOptions;
    /**
     * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current Amazon Web Services Region.
     */
    reputationOptions?: CreateConfigurationSetRequestBodyReputationOptions;
    /**
     * Used to enable or disable email sending for messages that use this configuration set in the current Amazon Web Services Region.
     */
    sendingOptions?: CreateConfigurationSetRequestBodySendingOptions;
    /**
     * An object that contains information about the suppression list preferences for your account.
     */
    suppressionOptions?: CreateConfigurationSetRequestBodySuppressionOptions;
    /**
     * An array of objects that define the tags (keys and values) to associate with the configuration set.
     */
    tags?: shared.Tag[];
    /**
     * <p>An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.</p> <p>These images and links include references to a domain operated by Amazon Web Services. You can optionally configure the Amazon SES to use a domain that you operate for these images and links.</p>
     */
    trackingOptions?: CreateConfigurationSetRequestBodyTrackingOptions;
    /**
     * An object that defines the VDM settings that apply to emails that you send using the configuration set.
     */
    vdmOptions?: CreateConfigurationSetRequestBodyVdmOptions;
}
export declare class CreateConfigurationSetRequest extends SpeakeasyBase {
    requestBody: CreateConfigurationSetRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateConfigurationSetResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    /**
     * BadRequestException
     */
    badRequestException?: any;
    /**
     * ConcurrentModificationException
     */
    concurrentModificationException?: any;
    contentType: string;
    /**
     * Success
     */
    createConfigurationSetResponse?: Record<string, any>;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * NotFoundException
     */
    notFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
}
