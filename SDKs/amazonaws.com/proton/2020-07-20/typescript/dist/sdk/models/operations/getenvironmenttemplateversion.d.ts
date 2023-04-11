import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetEnvironmentTemplateVersionXAmzTargetEnum {
    AwsProton20200720GetEnvironmentTemplateVersion = "AwsProton20200720.GetEnvironmentTemplateVersion"
}
export declare class GetEnvironmentTemplateVersionRequest extends SpeakeasyBase {
    getEnvironmentTemplateVersionInput: shared.GetEnvironmentTemplateVersionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetEnvironmentTemplateVersionXAmzTargetEnum;
}
export declare class GetEnvironmentTemplateVersionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getEnvironmentTemplateVersionOutput?: shared.GetEnvironmentTemplateVersionOutput;
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
