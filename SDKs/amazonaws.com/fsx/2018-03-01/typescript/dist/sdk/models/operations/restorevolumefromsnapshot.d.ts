import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreVolumeFromSnapshotXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301RestoreVolumeFromSnapshot = "AWSSimbaAPIService_v20180301.RestoreVolumeFromSnapshot"
}
export declare class RestoreVolumeFromSnapshotRequest extends SpeakeasyBase {
    restoreVolumeFromSnapshotRequest: shared.RestoreVolumeFromSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreVolumeFromSnapshotXAmzTargetEnum;
}
export declare class RestoreVolumeFromSnapshotResponse extends SpeakeasyBase {
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
     * Success
     */
    restoreVolumeFromSnapshotResponse?: shared.RestoreVolumeFromSnapshotResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VolumeNotFound
     */
    volumeNotFound?: any;
}
