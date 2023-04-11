import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetMaintenanceWindowXAmzTargetEnum {
    AmazonSSMGetMaintenanceWindow = "AmazonSSM.GetMaintenanceWindow"
}
export declare class GetMaintenanceWindowRequest extends SpeakeasyBase {
    getMaintenanceWindowRequest: shared.GetMaintenanceWindowRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetMaintenanceWindowXAmzTargetEnum;
}
export declare class GetMaintenanceWindowResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * DoesNotExistException
     */
    doesNotExistException?: any;
    /**
     * Success
     */
    getMaintenanceWindowResult?: shared.GetMaintenanceWindowResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
