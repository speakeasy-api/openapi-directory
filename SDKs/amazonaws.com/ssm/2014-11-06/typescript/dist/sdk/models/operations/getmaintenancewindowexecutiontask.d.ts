import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMaintenanceWindowExecutionTaskXAmzTargetEnum {
    AmazonSSMGetMaintenanceWindowExecutionTask = "AmazonSSM.GetMaintenanceWindowExecutionTask"
}
export declare class GetMaintenanceWindowExecutionTaskRequest extends SpeakeasyBase {
    getMaintenanceWindowExecutionTaskRequest: shared.GetMaintenanceWindowExecutionTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowExecutionTaskXAmzTargetEnum;
}
export declare class GetMaintenanceWindowExecutionTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * Success
     */
    getMaintenanceWindowExecutionTaskResult?: shared.GetMaintenanceWindowExecutionTaskResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
