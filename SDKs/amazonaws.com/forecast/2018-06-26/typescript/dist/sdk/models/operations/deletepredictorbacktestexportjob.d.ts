import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeletePredictorBacktestExportJobXAmzTargetEnum {
    AmazonForecastDeletePredictorBacktestExportJob = "AmazonForecast.DeletePredictorBacktestExportJob"
}
export declare class DeletePredictorBacktestExportJobRequest extends SpeakeasyBase {
    deletePredictorBacktestExportJobRequest: shared.DeletePredictorBacktestExportJobRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeletePredictorBacktestExportJobXAmzTargetEnum;
}
export declare class DeletePredictorBacktestExportJobResponse extends SpeakeasyBase {
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
