import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ModifyReportDefinitionXAmzTargetEnum {
    AWSOrigamiServiceGatewayServiceModifyReportDefinition = "AWSOrigamiServiceGatewayService.ModifyReportDefinition"
}
export declare class ModifyReportDefinitionRequest extends SpeakeasyBase {
    modifyReportDefinitionRequest: shared.ModifyReportDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyReportDefinitionXAmzTargetEnum;
}
export declare class ModifyReportDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * Success
     */
    modifyReportDefinitionResponse?: Record<string, any>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
