import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum QueryWhatIfForecastXAmzTargetEnum {
    AmazonForecastRuntimeQueryWhatIfForecast = "AmazonForecastRuntime.QueryWhatIfForecast"
}
export declare class QueryWhatIfForecastRequest extends SpeakeasyBase {
    queryWhatIfForecastRequest: shared.QueryWhatIfForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: QueryWhatIfForecastXAmzTargetEnum;
}
export declare class QueryWhatIfForecastResponse extends SpeakeasyBase {
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
    queryWhatIfForecastResponse?: shared.QueryWhatIfForecastResponse;
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
