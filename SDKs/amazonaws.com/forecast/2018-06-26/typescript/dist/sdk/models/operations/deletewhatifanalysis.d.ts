import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWhatIfAnalysisXAmzTargetEnum {
    AmazonForecastDeleteWhatIfAnalysis = "AmazonForecast.DeleteWhatIfAnalysis"
}
export declare class DeleteWhatIfAnalysisRequest extends SpeakeasyBase {
    deleteWhatIfAnalysisRequest: shared.DeleteWhatIfAnalysisRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWhatIfAnalysisXAmzTargetEnum;
}
export declare class DeleteWhatIfAnalysisResponse extends SpeakeasyBase {
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
