import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CopyBackupXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CopyBackup = "AWSSimbaAPIService_v20180301.CopyBackup"
}
export declare class CopyBackupRequest extends SpeakeasyBase {
    copyBackupRequest: shared.CopyBackupRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopyBackupXAmzTargetEnum;
}
export declare class CopyBackupResponse extends SpeakeasyBase {
    /**
     * BackupNotFound
     */
    backupNotFound?: any;
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    copyBackupResponse?: shared.CopyBackupResponse;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * IncompatibleRegionForMultiAZ
     */
    incompatibleRegionForMultiAZ?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDestinationKmsKey
     */
    invalidDestinationKmsKey?: any;
    /**
     * InvalidRegion
     */
    invalidRegion?: any;
    /**
     * InvalidSourceKmsKey
     */
    invalidSourceKmsKey?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    /**
     * SourceBackupUnavailable
     */
    sourceBackupUnavailable?: any;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
}
