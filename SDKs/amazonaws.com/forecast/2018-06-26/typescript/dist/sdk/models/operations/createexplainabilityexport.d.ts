import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateExplainabilityExportXAmzTargetEnum {
    AmazonForecastCreateExplainabilityExport = "AmazonForecast.CreateExplainabilityExport"
}
export declare class CreateExplainabilityExportRequest extends SpeakeasyBase {
    createExplainabilityExportRequest: shared.CreateExplainabilityExportRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateExplainabilityExportXAmzTargetEnum;
}
export declare class CreateExplainabilityExportResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createExplainabilityExportResponse?: shared.CreateExplainabilityExportResponse;
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
