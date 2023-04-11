import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateForecastXAmzTargetEnum {
    AmazonForecastCreateForecast = "AmazonForecast.CreateForecast"
}
export declare class CreateForecastRequest extends SpeakeasyBase {
    createForecastRequest: shared.CreateForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateForecastXAmzTargetEnum;
}
export declare class CreateForecastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createForecastResponse?: shared.CreateForecastResponse;
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
