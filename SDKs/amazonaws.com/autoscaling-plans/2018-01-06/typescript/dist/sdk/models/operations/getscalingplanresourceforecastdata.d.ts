import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetScalingPlanResourceForecastDataXAmzTargetEnum {
    AnyScaleScalingPlannerFrontendServiceGetScalingPlanResourceForecastData = "AnyScaleScalingPlannerFrontendService.GetScalingPlanResourceForecastData"
}
export declare class GetScalingPlanResourceForecastDataRequest extends SpeakeasyBase {
    getScalingPlanResourceForecastDataRequest: shared.GetScalingPlanResourceForecastDataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetScalingPlanResourceForecastDataXAmzTargetEnum;
}
export declare class GetScalingPlanResourceForecastDataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getScalingPlanResourceForecastDataResponse?: shared.GetScalingPlanResourceForecastDataResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
