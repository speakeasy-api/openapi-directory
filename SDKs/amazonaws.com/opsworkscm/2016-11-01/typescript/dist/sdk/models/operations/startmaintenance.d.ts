import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StartMaintenanceXAmzTargetEnum {
    OpsWorksCMV20161101StartMaintenance = "OpsWorksCM_V2016_11_01.StartMaintenance"
}
export declare class StartMaintenanceRequest extends SpeakeasyBase {
    startMaintenanceRequest: shared.StartMaintenanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartMaintenanceXAmzTargetEnum;
}
export declare class StartMaintenanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    startMaintenanceResponse?: shared.StartMaintenanceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
