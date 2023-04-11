import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteFlowTemplate = "IotThingsGraphFrontEndService.DeleteFlowTemplate"
}
export declare class DeleteFlowTemplateRequest extends SpeakeasyBase {
    deleteFlowTemplateRequest: shared.DeleteFlowTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteFlowTemplateXAmzTargetEnum;
}
export declare class DeleteFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteFlowTemplateResponse?: Record<string, any>;
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
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
