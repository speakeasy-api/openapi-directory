import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUpdateFlowTemplate = "IotThingsGraphFrontEndService.UpdateFlowTemplate"
}
export declare class UpdateFlowTemplateRequest extends SpeakeasyBase {
    updateFlowTemplateRequest: shared.UpdateFlowTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateFlowTemplateXAmzTargetEnum;
}
export declare class UpdateFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateFlowTemplateResponse?: shared.UpdateFlowTemplateResponse;
}
