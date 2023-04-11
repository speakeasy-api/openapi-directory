import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteBackupXAmzTargetEnum {
    OpsWorksCMV20161101DeleteBackup = "OpsWorksCM_V2016_11_01.DeleteBackup"
}
export declare class DeleteBackupRequest extends SpeakeasyBase {
    deleteBackupRequest: shared.DeleteBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteBackupXAmzTargetEnum;
}
export declare class DeleteBackupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteBackupResponse?: Record<string, any>;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
