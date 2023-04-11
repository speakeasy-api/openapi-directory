import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterTargetWithMaintenanceWindowXAmzTargetEnum {
    AmazonSSMRegisterTargetWithMaintenanceWindow = "AmazonSSM.RegisterTargetWithMaintenanceWindow"
}
export declare class RegisterTargetWithMaintenanceWindowRequest extends SpeakeasyBase {
    registerTargetWithMaintenanceWindowRequest: shared.RegisterTargetWithMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterTargetWithMaintenanceWindowXAmzTargetEnum;
}
export declare class RegisterTargetWithMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * IdempotentParameterMismatch
     */
    idempotentParameterMismatch?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    registerTargetWithMaintenanceWindowResult?: shared.RegisterTargetWithMaintenanceWindowResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
}
