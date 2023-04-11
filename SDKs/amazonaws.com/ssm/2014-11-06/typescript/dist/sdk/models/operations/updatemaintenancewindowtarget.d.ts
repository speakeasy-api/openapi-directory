import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateMaintenanceWindowTargetXAmzTargetEnum {
    AmazonSSMUpdateMaintenanceWindowTarget = "AmazonSSM.UpdateMaintenanceWindowTarget"
}
export declare class UpdateMaintenanceWindowTargetRequest extends SpeakeasyBase {
    updateMaintenanceWindowTargetRequest: shared.UpdateMaintenanceWindowTargetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateMaintenanceWindowTargetXAmzTargetEnum;
}
export declare class UpdateMaintenanceWindowTargetResponse extends SpeakeasyBase {
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
    updateMaintenanceWindowTargetResult?: shared.UpdateMaintenanceWindowTargetResult;
}
