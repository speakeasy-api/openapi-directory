import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteForecastExportJobXAmzTargetEnum {
    AmazonForecastDeleteForecastExportJob = "AmazonForecast.DeleteForecastExportJob"
}
export declare class DeleteForecastExportJobRequest extends SpeakeasyBase {
    deleteForecastExportJobRequest: shared.DeleteForecastExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteForecastExportJobXAmzTargetEnum;
}
export declare class DeleteForecastExportJobResponse extends SpeakeasyBase {
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
