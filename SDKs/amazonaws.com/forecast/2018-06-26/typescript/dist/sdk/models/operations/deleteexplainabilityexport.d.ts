import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteExplainabilityExportXAmzTargetEnum {
    AmazonForecastDeleteExplainabilityExport = "AmazonForecast.DeleteExplainabilityExport"
}
export declare class DeleteExplainabilityExportRequest extends SpeakeasyBase {
    deleteExplainabilityExportRequest: shared.DeleteExplainabilityExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteExplainabilityExportXAmzTargetEnum;
}
export declare class DeleteExplainabilityExportResponse extends SpeakeasyBase {
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
