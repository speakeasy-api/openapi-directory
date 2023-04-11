import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateTemplateSyncConfigXAmzTargetEnum {
    AwsProton20200720CreateTemplateSyncConfig = "AwsProton20200720.CreateTemplateSyncConfig"
}
export declare class CreateTemplateSyncConfigRequest extends SpeakeasyBase {
    createTemplateSyncConfigInput: shared.CreateTemplateSyncConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateTemplateSyncConfigXAmzTargetEnum;
}
export declare class CreateTemplateSyncConfigResponse extends SpeakeasyBase {
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
    createTemplateSyncConfigOutput?: shared.CreateTemplateSyncConfigOutput;
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
