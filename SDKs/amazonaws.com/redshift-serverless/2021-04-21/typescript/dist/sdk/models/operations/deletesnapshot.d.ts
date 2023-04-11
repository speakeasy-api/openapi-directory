import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSnapshotXAmzTargetEnum {
    RedshiftServerlessDeleteSnapshot = "RedshiftServerless.DeleteSnapshot"
}
export declare class DeleteSnapshotRequest extends SpeakeasyBase {
    deleteSnapshotRequest: shared.DeleteSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteSnapshotXAmzTargetEnum;
}
export declare class DeleteSnapshotResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSnapshotResponse?: shared.DeleteSnapshotResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
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
