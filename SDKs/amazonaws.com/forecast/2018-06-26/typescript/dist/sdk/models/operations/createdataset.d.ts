import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDatasetXAmzTargetEnum {
    AmazonForecastCreateDataset = "AmazonForecast.CreateDataset"
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    createDatasetRequest: shared.CreateDatasetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetXAmzTargetEnum;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createDatasetResponse?: shared.CreateDatasetResponse;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
}
