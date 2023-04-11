import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Details about the ECR automated re-scan duration setting for your environment.
 */
export declare class UpdateConfigurationRequestBodyEcrConfiguration extends SpeakeasyBase {
    rescanDuration?: shared.EcrRescanDurationEnum;
}
export declare class UpdateConfigurationRequestBody extends SpeakeasyBase {
    /**
     * Details about the ECR automated re-scan duration setting for your environment.
     */
    ecrConfiguration: UpdateConfigurationRequestBodyEcrConfiguration;
}
export declare class UpdateConfigurationRequest extends SpeakeasyBase {
    requestBody: UpdateConfigurationRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateConfigurationResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
