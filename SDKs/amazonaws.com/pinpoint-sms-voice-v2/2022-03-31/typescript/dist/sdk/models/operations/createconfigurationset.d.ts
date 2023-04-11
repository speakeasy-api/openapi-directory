import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateConfigurationSetXAmzTargetEnum {
    PinpointSMSVoiceV2CreateConfigurationSet = "PinpointSMSVoiceV2.CreateConfigurationSet"
}
export declare class CreateConfigurationSetRequest extends SpeakeasyBase {
    createConfigurationSetRequest: shared.CreateConfigurationSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateConfigurationSetXAmzTargetEnum;
}
export declare class CreateConfigurationSetResponse extends SpeakeasyBase {
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
    createConfigurationSetResult?: shared.CreateConfigurationSetResult;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
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
