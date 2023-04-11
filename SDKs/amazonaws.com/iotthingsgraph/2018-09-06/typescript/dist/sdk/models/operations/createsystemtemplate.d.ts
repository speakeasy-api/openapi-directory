import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceCreateSystemTemplate = "IotThingsGraphFrontEndService.CreateSystemTemplate"
}
export declare class CreateSystemTemplateRequest extends SpeakeasyBase {
    createSystemTemplateRequest: shared.CreateSystemTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSystemTemplateXAmzTargetEnum;
}
export declare class CreateSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createSystemTemplateResponse?: shared.CreateSystemTemplateResponse;
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
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
