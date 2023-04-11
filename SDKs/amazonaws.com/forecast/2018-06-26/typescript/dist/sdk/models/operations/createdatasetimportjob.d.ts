import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDatasetImportJobXAmzTargetEnum {
    AmazonForecastCreateDatasetImportJob = "AmazonForecast.CreateDatasetImportJob"
}
export declare class CreateDatasetImportJobRequest extends SpeakeasyBase {
    createDatasetImportJobRequest: shared.CreateDatasetImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetImportJobXAmzTargetEnum;
}
export declare class CreateDatasetImportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDatasetImportJobResponse?: shared.CreateDatasetImportJobResponse;
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
