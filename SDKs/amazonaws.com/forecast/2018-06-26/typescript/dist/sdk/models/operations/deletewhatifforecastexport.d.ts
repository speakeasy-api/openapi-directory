import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWhatIfForecastExportXAmzTargetEnum {
    AmazonForecastDeleteWhatIfForecastExport = "AmazonForecast.DeleteWhatIfForecastExport"
}
export declare class DeleteWhatIfForecastExportRequest extends SpeakeasyBase {
    deleteWhatIfForecastExportRequest: shared.DeleteWhatIfForecastExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWhatIfForecastExportXAmzTargetEnum;
}
export declare class DeleteWhatIfForecastExportResponse extends SpeakeasyBase {
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
