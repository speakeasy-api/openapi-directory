import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetFlowTemplate = "IotThingsGraphFrontEndService.GetFlowTemplate"
}
export declare class GetFlowTemplateRequest extends SpeakeasyBase {
    getFlowTemplateRequest: shared.GetFlowTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetFlowTemplateXAmzTargetEnum;
}
export declare class GetFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getFlowTemplateResponse?: shared.GetFlowTemplateResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
