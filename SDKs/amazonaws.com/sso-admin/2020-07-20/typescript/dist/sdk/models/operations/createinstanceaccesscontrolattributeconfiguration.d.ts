import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SWBExternalServiceCreateInstanceAccessControlAttributeConfiguration = "SWBExternalService.CreateInstanceAccessControlAttributeConfiguration"
}
export declare class CreateInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    createInstanceAccessControlAttributeConfigurationRequest: shared.CreateInstanceAccessControlAttributeConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class CreateInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
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
     * Success
     */
    createInstanceAccessControlAttributeConfigurationResponse?: Record<string, any>;
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
