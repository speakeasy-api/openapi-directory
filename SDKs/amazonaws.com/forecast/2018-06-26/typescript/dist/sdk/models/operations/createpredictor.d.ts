import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePredictorXAmzTargetEnum {
    AmazonForecastCreatePredictor = "AmazonForecast.CreatePredictor"
}
export declare class CreatePredictorRequest extends SpeakeasyBase {
    createPredictorRequest: shared.CreatePredictorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePredictorXAmzTargetEnum;
}
export declare class CreatePredictorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPredictorResponse?: shared.CreatePredictorResponse;
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
