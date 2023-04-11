import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMaintenanceWindowTaskXAmzTargetEnum {
    AmazonSSMGetMaintenanceWindowTask = "AmazonSSM.GetMaintenanceWindowTask"
}
export declare class GetMaintenanceWindowTaskRequest extends SpeakeasyBase {
    getMaintenanceWindowTaskRequest: shared.GetMaintenanceWindowTaskRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowTaskXAmzTargetEnum;
}
export declare class GetMaintenanceWindowTaskResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * Success
     */
    getMaintenanceWindowTaskResult?: shared.GetMaintenanceWindowTaskResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
