import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum QueryForecastXAmzTargetEnum {
    AmazonForecastRuntimeQueryForecast = "AmazonForecastRuntime.QueryForecast"
}
export declare class QueryForecastRequest extends SpeakeasyBase {
    queryForecastRequest: shared.QueryForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryForecastXAmzTargetEnum;
}
export declare class QueryForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidNextTokenException
     */
    invalidNextTokenException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    queryForecastResponse?: shared.QueryForecastResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
