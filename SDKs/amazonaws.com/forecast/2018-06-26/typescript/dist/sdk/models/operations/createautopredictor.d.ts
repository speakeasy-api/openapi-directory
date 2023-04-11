import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAutoPredictorXAmzTargetEnum {
    AmazonForecastCreateAutoPredictor = "AmazonForecast.CreateAutoPredictor"
}
export declare class CreateAutoPredictorRequest extends SpeakeasyBase {
    createAutoPredictorRequest: shared.CreateAutoPredictorRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAutoPredictorXAmzTargetEnum;
}
export declare class CreateAutoPredictorResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAutoPredictorResponse?: shared.CreateAutoPredictorResponse;
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
