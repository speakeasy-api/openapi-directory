import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMaintenanceWindowXAmzTargetEnum {
    AmazonSSMUpdateMaintenanceWindow = "AmazonSSM.UpdateMaintenanceWindow"
}
export declare class UpdateMaintenanceWindowRequest extends SpeakeasyBase {
    updateMaintenanceWindowRequest: shared.UpdateMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMaintenanceWindowXAmzTargetEnum;
}
export declare class UpdateMaintenanceWindowResponse extends SpeakeasyBase {
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
    updateMaintenanceWindowResult?: shared.UpdateMaintenanceWindowResult;
}
