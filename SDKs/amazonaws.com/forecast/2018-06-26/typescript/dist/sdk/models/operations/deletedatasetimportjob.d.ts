import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDatasetImportJobXAmzTargetEnum {
    AmazonForecastDeleteDatasetImportJob = "AmazonForecast.DeleteDatasetImportJob"
}
export declare class DeleteDatasetImportJobRequest extends SpeakeasyBase {
    deleteDatasetImportJobRequest: shared.DeleteDatasetImportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatasetImportJobXAmzTargetEnum;
}
export declare class DeleteDatasetImportJobResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
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
}
