import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutReportDefinitionXAmzTargetEnum {
    AWSOrigamiServiceGatewayServicePutReportDefinition = "AWSOrigamiServiceGatewayService.PutReportDefinition"
}
export declare class PutReportDefinitionRequest extends SpeakeasyBase {
    putReportDefinitionRequest: shared.PutReportDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutReportDefinitionXAmzTargetEnum;
}
export declare class PutReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DuplicateReportNameException
     */
    duplicateReportNameException?: any;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * Success
     */
    putReportDefinitionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ReportLimitReachedException
     */
    reportLimitReachedException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
