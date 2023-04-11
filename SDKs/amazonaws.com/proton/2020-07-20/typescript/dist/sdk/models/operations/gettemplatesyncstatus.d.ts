import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetTemplateSyncStatusXAmzTargetEnum {
    AwsProton20200720GetTemplateSyncStatus = "AwsProton20200720.GetTemplateSyncStatus"
}
export declare class GetTemplateSyncStatusRequest extends SpeakeasyBase {
    getTemplateSyncStatusInput: shared.GetTemplateSyncStatusInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetTemplateSyncStatusXAmzTargetEnum;
}
export declare class GetTemplateSyncStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    getTemplateSyncStatusOutput?: shared.GetTemplateSyncStatusOutput;
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
