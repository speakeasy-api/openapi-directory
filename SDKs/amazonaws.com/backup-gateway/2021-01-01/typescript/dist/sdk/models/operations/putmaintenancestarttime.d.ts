import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutMaintenanceStartTimeXAmzTargetEnum {
    BackupOnPremisesV20210101PutMaintenanceStartTime = "BackupOnPremises_v20210101.PutMaintenanceStartTime"
}
export declare class PutMaintenanceStartTimeRequest extends SpeakeasyBase {
    putMaintenanceStartTimeInput: shared.PutMaintenanceStartTimeInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutMaintenanceStartTimeXAmzTargetEnum;
}
export declare class PutMaintenanceStartTimeResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    putMaintenanceStartTimeOutput?: shared.PutMaintenanceStartTimeOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
