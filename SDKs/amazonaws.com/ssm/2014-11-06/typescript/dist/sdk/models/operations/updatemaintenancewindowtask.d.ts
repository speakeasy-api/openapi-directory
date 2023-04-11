import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMaintenanceWindowTaskXAmzTargetEnum {
    AmazonSSMUpdateMaintenanceWindowTask = "AmazonSSM.UpdateMaintenanceWindowTask"
}
export declare class UpdateMaintenanceWindowTaskRequest extends SpeakeasyBase {
    updateMaintenanceWindowTaskRequest: shared.UpdateMaintenanceWindowTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMaintenanceWindowTaskXAmzTargetEnum;
}
export declare class UpdateMaintenanceWindowTaskResponse extends SpeakeasyBase {
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
    /**
     * Success
     */
    updateMaintenanceWindowTaskResult?: shared.UpdateMaintenanceWindowTaskResult;
}
