import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateEnrollmentStatusXAmzTargetEnum {
    ComputeOptimizerServiceUpdateEnrollmentStatus = "ComputeOptimizerService.UpdateEnrollmentStatus"
}
export declare class UpdateEnrollmentStatusRequest extends SpeakeasyBase {
    updateEnrollmentStatusRequest: shared.UpdateEnrollmentStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateEnrollmentStatusXAmzTargetEnum;
}
export declare class UpdateEnrollmentStatusResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MissingAuthenticationToken
     */
    missingAuthenticationToken?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateEnrollmentStatusResponse?: shared.UpdateEnrollmentStatusResponse;
}
