import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ConvertRecoveryPointToSnapshotXAmzTargetEnum {
    RedshiftServerlessConvertRecoveryPointToSnapshot = "RedshiftServerless.ConvertRecoveryPointToSnapshot"
}
export declare class ConvertRecoveryPointToSnapshotRequest extends SpeakeasyBase {
    convertRecoveryPointToSnapshotRequest: shared.ConvertRecoveryPointToSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ConvertRecoveryPointToSnapshotXAmzTargetEnum;
}
export declare class ConvertRecoveryPointToSnapshotResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    convertRecoveryPointToSnapshotResponse?: shared.ConvertRecoveryPointToSnapshotResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ServiceQuotaExceededException
     */
    serviceQuotaExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * TooManyTagsException
     */
    tooManyTagsException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
