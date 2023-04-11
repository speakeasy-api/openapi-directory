import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SWBExternalServiceUpdateInstanceAccessControlAttributeConfiguration = "SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration"
}
export declare class UpdateInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    updateInstanceAccessControlAttributeConfigurationRequest: shared.UpdateInstanceAccessControlAttributeConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class UpdateInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
    /**
     * Success
     */
    updateInstanceAccessControlAttributeConfigurationResponse?: Record<string, any>;
    /**
     * ValidationException
     */
    validationException?: any;
}
