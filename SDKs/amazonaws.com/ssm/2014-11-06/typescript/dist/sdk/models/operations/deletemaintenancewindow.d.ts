import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteMaintenanceWindowXAmzTargetEnum {
    AmazonSSMDeleteMaintenanceWindow = "AmazonSSM.DeleteMaintenanceWindow"
}
export declare class DeleteMaintenanceWindowRequest extends SpeakeasyBase {
    deleteMaintenanceWindowRequest: shared.DeleteMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteMaintenanceWindowXAmzTargetEnum;
}
export declare class DeleteMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteMaintenanceWindowResult?: shared.DeleteMaintenanceWindowResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
