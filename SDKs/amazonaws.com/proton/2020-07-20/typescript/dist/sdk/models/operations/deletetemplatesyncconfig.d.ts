import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteTemplateSyncConfigXAmzTargetEnum {
    AwsProton20200720DeleteTemplateSyncConfig = "AwsProton20200720.DeleteTemplateSyncConfig"
}
export declare class DeleteTemplateSyncConfigRequest extends SpeakeasyBase {
    deleteTemplateSyncConfigInput: shared.DeleteTemplateSyncConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteTemplateSyncConfigXAmzTargetEnum;
}
export declare class DeleteTemplateSyncConfigResponse extends SpeakeasyBase {
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
    deleteTemplateSyncConfigOutput?: shared.DeleteTemplateSyncConfigOutput;
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
