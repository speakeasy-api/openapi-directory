import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateFlowTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceCreateFlowTemplate = "IotThingsGraphFrontEndService.CreateFlowTemplate"
}
export declare class CreateFlowTemplateRequest extends SpeakeasyBase {
    createFlowTemplateRequest: shared.CreateFlowTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateFlowTemplateXAmzTargetEnum;
}
export declare class CreateFlowTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createFlowTemplateResponse?: shared.CreateFlowTemplateResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
