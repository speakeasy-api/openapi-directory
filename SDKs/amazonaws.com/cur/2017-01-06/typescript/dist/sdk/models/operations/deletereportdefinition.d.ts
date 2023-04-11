import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteReportDefinitionXAmzTargetEnum {
    AWSOrigamiServiceGatewayServiceDeleteReportDefinition = "AWSOrigamiServiceGatewayService.DeleteReportDefinition"
}
export declare class DeleteReportDefinitionRequest extends SpeakeasyBase {
    deleteReportDefinitionRequest: shared.DeleteReportDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteReportDefinitionXAmzTargetEnum;
}
export declare class DeleteReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteReportDefinitionResponse?: shared.DeleteReportDefinitionResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
