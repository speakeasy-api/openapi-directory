import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateWhatIfForecastExportXAmzTargetEnum {
    AmazonForecastCreateWhatIfForecastExport = "AmazonForecast.CreateWhatIfForecastExport"
}
export declare class CreateWhatIfForecastExportRequest extends SpeakeasyBase {
    createWhatIfForecastExportRequest: shared.CreateWhatIfForecastExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWhatIfForecastExportXAmzTargetEnum;
}
export declare class CreateWhatIfForecastExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createWhatIfForecastExportResponse?: shared.CreateWhatIfForecastExportResponse;
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
