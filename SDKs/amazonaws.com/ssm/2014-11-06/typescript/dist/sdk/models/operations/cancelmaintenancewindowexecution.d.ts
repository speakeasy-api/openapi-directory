import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CancelMaintenanceWindowExecutionXAmzTargetEnum {
    AmazonSSMCancelMaintenanceWindowExecution = "AmazonSSM.CancelMaintenanceWindowExecution"
}
export declare class CancelMaintenanceWindowExecutionRequest extends SpeakeasyBase {
    cancelMaintenanceWindowExecutionRequest: shared.CancelMaintenanceWindowExecutionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelMaintenanceWindowExecutionXAmzTargetEnum;
}
export declare class CancelMaintenanceWindowExecutionResponse extends SpeakeasyBase {
    /**
     * Success
     */
    cancelMaintenanceWindowExecutionResult?: shared.CancelMaintenanceWindowExecutionResult;
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
