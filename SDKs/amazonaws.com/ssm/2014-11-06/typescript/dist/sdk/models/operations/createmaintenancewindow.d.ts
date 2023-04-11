import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateMaintenanceWindowXAmzTargetEnum {
    AmazonSSMCreateMaintenanceWindow = "AmazonSSM.CreateMaintenanceWindow"
}
export declare class CreateMaintenanceWindowRequest extends SpeakeasyBase {
    createMaintenanceWindowRequest: shared.CreateMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateMaintenanceWindowXAmzTargetEnum;
}
export declare class CreateMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createMaintenanceWindowResult?: shared.CreateMaintenanceWindowResult;
    /**
     * IdempotentParameterMismatch
     */
    idempotentParameterMismatch?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceLimitExceededException
     */
    resourceLimitExceededException?: any;
}
