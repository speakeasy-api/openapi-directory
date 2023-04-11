import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSnapshotXAmzTargetEnum {
    RedshiftServerlessUpdateSnapshot = "RedshiftServerless.UpdateSnapshot"
}
export declare class UpdateSnapshotRequest extends SpeakeasyBase {
    updateSnapshotRequest: shared.UpdateSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateSnapshotXAmzTargetEnum;
}
export declare class UpdateSnapshotResponse extends SpeakeasyBase {
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
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSnapshotResponse?: shared.UpdateSnapshotResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
