import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreFromSnapshotXAmzTargetEnum {
    RedshiftServerlessRestoreFromSnapshot = "RedshiftServerless.RestoreFromSnapshot"
}
export declare class RestoreFromSnapshotRequest extends SpeakeasyBase {
    restoreFromSnapshotRequest: shared.RestoreFromSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreFromSnapshotXAmzTargetEnum;
}
export declare class RestoreFromSnapshotResponse extends SpeakeasyBase {
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
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * Success
     */
    restoreFromSnapshotResponse?: shared.RestoreFromSnapshotResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
