import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBackupXAmzTargetEnum {
    OpsWorksCMV20161101CreateBackup = "OpsWorksCM_V2016_11_01.CreateBackup"
}
export declare class CreateBackupRequest extends SpeakeasyBase {
    createBackupRequest: shared.CreateBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBackupXAmzTargetEnum;
}
export declare class CreateBackupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createBackupResponse?: shared.CreateBackupResponse;
    /**
     * InvalidStateException
     */
    invalidStateException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
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
