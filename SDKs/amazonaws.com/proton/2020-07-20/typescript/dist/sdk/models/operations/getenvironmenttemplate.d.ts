import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEnvironmentTemplateXAmzTargetEnum {
    AwsProton20200720GetEnvironmentTemplate = "AwsProton20200720.GetEnvironmentTemplate"
}
export declare class GetEnvironmentTemplateRequest extends SpeakeasyBase {
    getEnvironmentTemplateInput: shared.GetEnvironmentTemplateInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentTemplateXAmzTargetEnum;
}
export declare class GetEnvironmentTemplateResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEnvironmentTemplateOutput?: shared.GetEnvironmentTemplateOutput;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
     * ValidationException
     */
    validationException?: any;
}
