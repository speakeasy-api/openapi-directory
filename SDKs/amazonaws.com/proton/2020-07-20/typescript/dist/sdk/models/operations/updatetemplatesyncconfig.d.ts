import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateTemplateSyncConfigXAmzTargetEnum {
    AwsProton20200720UpdateTemplateSyncConfig = "AwsProton20200720.UpdateTemplateSyncConfig"
}
export declare class UpdateTemplateSyncConfigRequest extends SpeakeasyBase {
    updateTemplateSyncConfigInput: shared.UpdateTemplateSyncConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateTemplateSyncConfigXAmzTargetEnum;
}
export declare class UpdateTemplateSyncConfigResponse extends SpeakeasyBase {
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
    updateTemplateSyncConfigOutput?: shared.UpdateTemplateSyncConfigOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
