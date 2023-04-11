import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum NotifyResourceDeploymentStatusChangeXAmzTargetEnum {
    AwsProton20200720NotifyResourceDeploymentStatusChange = "AwsProton20200720.NotifyResourceDeploymentStatusChange"
}
export declare class NotifyResourceDeploymentStatusChangeRequest extends SpeakeasyBase {
    notifyResourceDeploymentStatusChangeInput: shared.NotifyResourceDeploymentStatusChangeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyResourceDeploymentStatusChangeXAmzTargetEnum;
}
export declare class NotifyResourceDeploymentStatusChangeResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    notifyResourceDeploymentStatusChangeOutput?: Record<string, any>;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
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
