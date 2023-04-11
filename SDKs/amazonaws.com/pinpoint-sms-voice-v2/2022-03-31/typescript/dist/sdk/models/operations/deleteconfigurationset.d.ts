import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteConfigurationSetXAmzTargetEnum {
    PinpointSMSVoiceV2DeleteConfigurationSet = "PinpointSMSVoiceV2.DeleteConfigurationSet"
}
export declare class DeleteConfigurationSetRequest extends SpeakeasyBase {
    deleteConfigurationSetRequest: shared.DeleteConfigurationSetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteConfigurationSetXAmzTargetEnum;
}
export declare class DeleteConfigurationSetResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteConfigurationSetResult?: shared.DeleteConfigurationSetResult;
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
