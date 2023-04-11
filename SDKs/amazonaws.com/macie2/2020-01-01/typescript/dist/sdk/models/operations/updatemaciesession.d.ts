import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:
 */
export declare enum UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum {
    FifteenMinutes = "FIFTEEN_MINUTES",
    OneHour = "ONE_HOUR",
    SixHours = "SIX_HOURS"
}
/**
 * The status of an Amazon Macie account. Valid values are:
 */
export declare enum UpdateMacieSessionRequestBodyStatusEnum {
    Paused = "PAUSED",
    Enabled = "ENABLED"
}
export declare class UpdateMacieSessionRequestBody extends SpeakeasyBase {
    /**
     * The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see <a href="https://docs.aws.amazon.com/macie/latest/user/findings-monitor.html">Monitoring and processing findings</a> in the <i>Amazon Macie User Guide</i>. Valid values are:
     */
    findingPublishingFrequency?: UpdateMacieSessionRequestBodyFindingPublishingFrequencyEnum;
    /**
     * The status of an Amazon Macie account. Valid values are:
     */
    status?: UpdateMacieSessionRequestBodyStatusEnum;
}
export declare class UpdateMacieSessionRequest extends SpeakeasyBase {
    requestBody: UpdateMacieSessionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateMacieSessionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateMacieSessionResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
