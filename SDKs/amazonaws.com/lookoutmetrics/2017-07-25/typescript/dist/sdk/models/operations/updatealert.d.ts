import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A configuration that specifies the action to perform when anomalies are detected.
 */
export declare class UpdateAlertRequestBodyAction extends SpeakeasyBase {
    lambdaConfiguration?: shared.LambdaConfiguration;
    snsConfiguration?: shared.SNSConfiguration;
}
/**
 * The configuration of the alert filters.
 */
export declare class UpdateAlertRequestBodyAlertFilters extends SpeakeasyBase {
    dimensionFilterList?: shared.DimensionFilter[];
    metricList?: string[];
}
export declare class UpdateAlertRequestBody extends SpeakeasyBase {
    /**
     * A configuration that specifies the action to perform when anomalies are detected.
     */
    action?: UpdateAlertRequestBodyAction;
    /**
     * The ARN of the alert to update.
     */
    alertArn: string;
    /**
     * A description of the alert.
     */
    alertDescription?: string;
    /**
     * The configuration of the alert filters.
     */
    alertFilters?: UpdateAlertRequestBodyAlertFilters;
    /**
     * An integer from 0 to 100 specifying the alert sensitivity threshold.
     */
    alertSensitivityThreshold?: number;
}
export declare class UpdateAlertRequest extends SpeakeasyBase {
    requestBody: UpdateAlertRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateAlertResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
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
     * TooManyRequestsException
     */
    tooManyRequestsException?: any;
    /**
     * Success
     */
    updateAlertResponse?: shared.UpdateAlertResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
