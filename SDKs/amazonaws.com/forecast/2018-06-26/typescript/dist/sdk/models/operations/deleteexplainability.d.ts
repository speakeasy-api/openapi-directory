import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteExplainabilityXAmzTargetEnum {
    AmazonForecastDeleteExplainability = "AmazonForecast.DeleteExplainability"
}
export declare class DeleteExplainabilityRequest extends SpeakeasyBase {
    deleteExplainabilityRequest: shared.DeleteExplainabilityRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteExplainabilityXAmzTargetEnum;
}
export declare class DeleteExplainabilityResponse extends SpeakeasyBase {
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
