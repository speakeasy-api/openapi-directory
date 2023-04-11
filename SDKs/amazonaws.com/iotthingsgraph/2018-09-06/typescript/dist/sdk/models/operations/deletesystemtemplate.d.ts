import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSystemTemplateXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeleteSystemTemplate = "IotThingsGraphFrontEndService.DeleteSystemTemplate"
}
export declare class DeleteSystemTemplateRequest extends SpeakeasyBase {
    deleteSystemTemplateRequest: shared.DeleteSystemTemplateRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSystemTemplateXAmzTargetEnum;
}
export declare class DeleteSystemTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteSystemTemplateResponse?: Record<string, any>;
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
