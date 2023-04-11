import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeregisterTaskFromMaintenanceWindowXAmzTargetEnum {
    AmazonSSMDeregisterTaskFromMaintenanceWindow = "AmazonSSM.DeregisterTaskFromMaintenanceWindow"
}
export declare class DeregisterTaskFromMaintenanceWindowRequest extends SpeakeasyBase {
    deregisterTaskFromMaintenanceWindowRequest: shared.DeregisterTaskFromMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterTaskFromMaintenanceWindowXAmzTargetEnum;
}
export declare class DeregisterTaskFromMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deregisterTaskFromMaintenanceWindowResult?: shared.DeregisterTaskFromMaintenanceWindowResult;
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
