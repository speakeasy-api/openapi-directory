import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateSnapshotXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301UpdateSnapshot = "AWSSimbaAPIService_v20180301.UpdateSnapshot"
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
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * SnapshotNotFound
     */
    snapshotNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateSnapshotResponse?: shared.UpdateSnapshotResponse;
}
