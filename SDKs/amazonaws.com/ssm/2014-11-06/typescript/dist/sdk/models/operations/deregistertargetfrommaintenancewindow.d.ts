import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterTargetFromMaintenanceWindowXAmzTargetEnum {
    AmazonSSMDeregisterTargetFromMaintenanceWindow = "AmazonSSM.DeregisterTargetFromMaintenanceWindow"
}
export declare class DeregisterTargetFromMaintenanceWindowRequest extends SpeakeasyBase {
    deregisterTargetFromMaintenanceWindowRequest: shared.DeregisterTargetFromMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterTargetFromMaintenanceWindowXAmzTargetEnum;
}
export declare class DeregisterTargetFromMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterTargetFromMaintenanceWindowResult?: shared.DeregisterTargetFromMaintenanceWindowResult;
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
     * TargetInUseException
     */
    targetInUseException?: any;
}
