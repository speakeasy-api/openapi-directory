import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Permission granted on a workload share.
 */
export declare enum UpdateWorkloadShareRequestBodyPermissionTypeEnum {
    Readonly = "READONLY",
    Contributor = "CONTRIBUTOR"
}
export declare class UpdateWorkloadShareRequestBody extends SpeakeasyBase {
    /**
     * Permission granted on a workload share.
     */
    permissionType: UpdateWorkloadShareRequestBodyPermissionTypeEnum;
}
export declare class UpdateWorkloadShareRequest extends SpeakeasyBase {
    requestBody: UpdateWorkloadShareRequestBody;
    shareId: string;
    workloadId: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateWorkloadShareResponse extends SpeakeasyBase {
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
    updateWorkloadShareOutput?: shared.UpdateWorkloadShareOutput;
    /**
     * ValidationException
     */
    validationException?: any;
}
