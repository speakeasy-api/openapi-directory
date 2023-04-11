import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTemplateSyncConfigXAmzTargetEnum {
    AwsProton20200720GetTemplateSyncConfig = "AwsProton20200720.GetTemplateSyncConfig"
}
export declare class GetTemplateSyncConfigRequest extends SpeakeasyBase {
    getTemplateSyncConfigInput: shared.GetTemplateSyncConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTemplateSyncConfigXAmzTargetEnum;
}
export declare class GetTemplateSyncConfigResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getTemplateSyncConfigOutput?: shared.GetTemplateSyncConfigOutput;
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
