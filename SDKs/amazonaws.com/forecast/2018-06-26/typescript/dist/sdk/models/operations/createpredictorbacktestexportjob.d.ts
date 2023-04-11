import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreatePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastCreatePredictorBacktestExportJob = "AmazonForecast.CreatePredictorBacktestExportJob"
}
export declare class CreatePredictorBacktestExportJobRequest extends SpeakeasyBase {
    createPredictorBacktestExportJobRequest: shared.CreatePredictorBacktestExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreatePredictorBacktestExportJobXAmzTargetEnum;
}
export declare class CreatePredictorBacktestExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createPredictorBacktestExportJobResponse?: shared.CreatePredictorBacktestExportJobResponse;
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
