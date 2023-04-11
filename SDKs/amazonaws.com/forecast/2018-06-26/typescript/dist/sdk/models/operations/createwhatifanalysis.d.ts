import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWhatIfAnalysisXAmzTargetEnum {
    AmazonForecastCreateWhatIfAnalysis = "AmazonForecast.CreateWhatIfAnalysis"
}
export declare class CreateWhatIfAnalysisRequest extends SpeakeasyBase {
    createWhatIfAnalysisRequest: shared.CreateWhatIfAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWhatIfAnalysisXAmzTargetEnum;
}
export declare class CreateWhatIfAnalysisResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWhatIfAnalysisResponse?: shared.CreateWhatIfAnalysisResponse;
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
