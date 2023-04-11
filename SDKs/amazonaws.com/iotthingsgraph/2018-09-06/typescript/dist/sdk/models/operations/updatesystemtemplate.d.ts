import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUpdateSystemTemplate = "IotThingsGraphFrontEndService.UpdateSystemTemplate"
}
export declare class UpdateSystemTemplateRequest extends SpeakeasyBase {
    updateSystemTemplateRequest: shared.UpdateSystemTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSystemTemplateXAmzTargetEnum;
}
export declare class UpdateSystemTemplateResponse extends SpeakeasyBase {
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
    updateSystemTemplateResponse?: shared.UpdateSystemTemplateResponse;
}
