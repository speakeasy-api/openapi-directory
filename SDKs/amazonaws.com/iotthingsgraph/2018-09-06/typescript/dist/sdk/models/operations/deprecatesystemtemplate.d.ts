import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeprecateSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeprecateSystemTemplate = "IotThingsGraphFrontEndService.DeprecateSystemTemplate"
}
export declare class DeprecateSystemTemplateRequest extends SpeakeasyBase {
    deprecateSystemTemplateRequest: shared.DeprecateSystemTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeprecateSystemTemplateXAmzTargetEnum;
}
export declare class DeprecateSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deprecateSystemTemplateResponse?: Record<string, any>;
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
