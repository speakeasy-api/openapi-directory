import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteWhatIfForecastXAmzTargetEnum {
    AmazonForecastDeleteWhatIfForecast = "AmazonForecast.DeleteWhatIfForecast"
}
export declare class DeleteWhatIfForecastRequest extends SpeakeasyBase {
    deleteWhatIfForecastRequest: shared.DeleteWhatIfForecastRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWhatIfForecastXAmzTargetEnum;
}
export declare class DeleteWhatIfForecastResponse extends SpeakeasyBase {
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
