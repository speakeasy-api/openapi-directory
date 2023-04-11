import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceGetSystemTemplate = "IotThingsGraphFrontEndService.GetSystemTemplate"
}
export declare class GetSystemTemplateRequest extends SpeakeasyBase {
    getSystemTemplateRequest: shared.GetSystemTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSystemTemplateXAmzTargetEnum;
}
export declare class GetSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSystemTemplateResponse?: shared.GetSystemTemplateResponse;
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
