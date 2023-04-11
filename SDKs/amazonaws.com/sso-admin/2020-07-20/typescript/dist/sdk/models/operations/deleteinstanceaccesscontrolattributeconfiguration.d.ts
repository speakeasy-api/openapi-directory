import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum {
    SWBExternalServiceDeleteInstanceAccessControlAttributeConfiguration = "SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration"
}
export declare class DeleteInstanceAccessControlAttributeConfigurationRequest extends SpeakeasyBase {
    deleteInstanceAccessControlAttributeConfigurationRequest: shared.DeleteInstanceAccessControlAttributeConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum;
}
export declare class DeleteInstanceAccessControlAttributeConfigurationResponse extends SpeakeasyBase {
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
    deleteInstanceAccessControlAttributeConfigurationResponse?: Record<string, any>;
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
