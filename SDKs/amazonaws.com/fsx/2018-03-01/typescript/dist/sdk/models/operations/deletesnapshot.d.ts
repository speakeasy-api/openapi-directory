import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSnapshotXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteSnapshot = "AWSSimbaAPIService_v20180301.DeleteSnapshot"
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
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSnapshotResponse?: shared.DeleteSnapshotResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SnapshotNotFound
     */
    snapshotNotFound?: any;
}
