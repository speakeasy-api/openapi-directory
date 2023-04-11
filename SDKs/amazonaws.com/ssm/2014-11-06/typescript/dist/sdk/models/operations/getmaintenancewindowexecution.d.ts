import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMaintenanceWindowExecutionXAmzTargetEnum {
    AmazonSSMGetMaintenanceWindowExecution = "AmazonSSM.GetMaintenanceWindowExecution"
}
export declare class GetMaintenanceWindowExecutionRequest extends SpeakeasyBase {
    getMaintenanceWindowExecutionRequest: shared.GetMaintenanceWindowExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowExecutionXAmzTargetEnum;
}
export declare class GetMaintenanceWindowExecutionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * Success
     */
    getMaintenanceWindowExecutionResult?: shared.GetMaintenanceWindowExecutionResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
