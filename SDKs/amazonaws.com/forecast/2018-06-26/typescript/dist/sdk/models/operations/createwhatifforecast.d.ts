import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWhatIfForecastXAmzTargetEnum {
    AmazonForecastCreateWhatIfForecast = "AmazonForecast.CreateWhatIfForecast"
}
export declare class CreateWhatIfForecastRequest extends SpeakeasyBase {
    createWhatIfForecastRequest: shared.CreateWhatIfForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWhatIfForecastXAmzTargetEnum;
}
export declare class CreateWhatIfForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWhatIfForecastResponse?: shared.CreateWhatIfForecastResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
