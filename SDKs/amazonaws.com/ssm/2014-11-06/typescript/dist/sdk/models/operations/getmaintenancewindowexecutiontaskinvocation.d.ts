import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum {
    AmazonSSMGetMaintenanceWindowExecutionTaskInvocation = "AmazonSSM.GetMaintenanceWindowExecutionTaskInvocation"
}
export declare class GetMaintenanceWindowExecutionTaskInvocationRequest extends SpeakeasyBase {
    getMaintenanceWindowExecutionTaskInvocationRequest: shared.GetMaintenanceWindowExecutionTaskInvocationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowExecutionTaskInvocationXAmzTargetEnum;
}
export declare class GetMaintenanceWindowExecutionTaskInvocationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * Success
     */
    getMaintenanceWindowExecutionTaskInvocationResult?: shared.GetMaintenanceWindowExecutionTaskInvocationResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
