import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RegisterTaskWithMaintenanceWindowXAmzTargetEnum {
    AmazonSSMRegisterTaskWithMaintenanceWindow = "AmazonSSM.RegisterTaskWithMaintenanceWindow"
}
export declare class RegisterTaskWithMaintenanceWindowRequest extends SpeakeasyBase {
    registerTaskWithMaintenanceWindowRequest: shared.RegisterTaskWithMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterTaskWithMaintenanceWindowXAmzTargetEnum;
}
export declare class RegisterTaskWithMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * FeatureNotAvailableException
     */
    featureNotAvailableException?: any;
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
    registerTaskWithMaintenanceWindowResult?: shared.RegisterTaskWithMaintenanceWindowResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
}
