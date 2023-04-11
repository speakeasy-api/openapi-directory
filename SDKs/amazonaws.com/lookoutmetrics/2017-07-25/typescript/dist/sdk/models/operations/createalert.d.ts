import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A configuration that specifies the action to perform when anomalies are detected.
 */
export declare class CreateAlertRequestBodyAction extends SpeakeasyBase {
    lambdaConfiguration?: shared.LambdaConfiguration;
    snsConfiguration?: shared.SNSConfiguration;
}
/**
 * The configuration of the alert filters.
 */
export declare class CreateAlertRequestBodyAlertFilters extends SpeakeasyBase {
    dimensionFilterList?: shared.DimensionFilter[];
    metricList?: string[];
}
export declare class CreateAlertRequestBody extends SpeakeasyBase {
    /**
     * A configuration that specifies the action to perform when anomalies are detected.
     */
    action: CreateAlertRequestBodyAction;
    /**
     * A description of the alert.
     */
    alertDescription?: string;
    /**
     * The configuration of the alert filters.
     */
    alertFilters?: CreateAlertRequestBodyAlertFilters;
    /**
     * The name of the alert.
     */
    alertName: string;
    /**
     * An integer from 0 to 100 specifying the alert sensitivity threshold.
     */
    alertSensitivityThreshold?: number;
    /**
     * The ARN of the detector to which the alert is attached.
     */
    anomalyDetectorArn: string;
    /**
     * A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.
     */
    tags?: Record<string, string>;
}
export declare class CreateAlertRequest extends SpeakeasyBase {
    requestBody: CreateAlertRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAlertResponse extends SpeakeasyBase {
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
     * Success
     */
    createAlertResponse?: shared.CreateAlertResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
