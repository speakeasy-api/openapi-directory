import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeprecateFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeprecateFlowTemplate = "IotThingsGraphFrontEndService.DeprecateFlowTemplate"
}
export declare class DeprecateFlowTemplateRequest extends SpeakeasyBase {
    deprecateFlowTemplateRequest: shared.DeprecateFlowTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateFlowTemplateXAmzTargetEnum;
}
export declare class DeprecateFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deprecateFlowTemplateResponse?: Record<string, any>;
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
