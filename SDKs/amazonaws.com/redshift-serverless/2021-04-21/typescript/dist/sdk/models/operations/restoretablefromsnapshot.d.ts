import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreTableFromSnapshotXAmzTargetEnum {
    RedshiftServerlessRestoreTableFromSnapshot = "RedshiftServerless.RestoreTableFromSnapshot"
}
export declare class RestoreTableFromSnapshotRequest extends SpeakeasyBase {
    restoreTableFromSnapshotRequest: shared.RestoreTableFromSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreTableFromSnapshotXAmzTargetEnum;
}
export declare class RestoreTableFromSnapshotResponse extends SpeakeasyBase {
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
    restoreTableFromSnapshotResponse?: shared.RestoreTableFromSnapshotResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
