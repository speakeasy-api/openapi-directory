import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateExplainabilityXAmzTargetEnum {
    AmazonForecastCreateExplainability = "AmazonForecast.CreateExplainability"
}
export declare class CreateExplainabilityRequest extends SpeakeasyBase {
    createExplainabilityRequest: shared.CreateExplainabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExplainabilityXAmzTargetEnum;
}
export declare class CreateExplainabilityResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createExplainabilityResponse?: shared.CreateExplainabilityResponse;
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
