import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateForecastExportJobXAmzTargetEnum {
    AmazonForecastCreateForecastExportJob = "AmazonForecast.CreateForecastExportJob"
}
export declare class CreateForecastExportJobRequest extends SpeakeasyBase {
    createForecastExportJobRequest: shared.CreateForecastExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateForecastExportJobXAmzTargetEnum;
}
export declare class CreateForecastExportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createForecastExportJobResponse?: shared.CreateForecastExportJobResponse;
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
