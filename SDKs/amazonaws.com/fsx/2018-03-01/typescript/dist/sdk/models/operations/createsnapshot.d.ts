import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSnapshotXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateSnapshot = "AWSSimbaAPIService_v20180301.CreateSnapshot"
}
export declare class CreateSnapshotRequest extends SpeakeasyBase {
    createSnapshotRequest: shared.CreateSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateSnapshotXAmzTargetEnum;
}
export declare class CreateSnapshotResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createSnapshotResponse?: shared.CreateSnapshotResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * VolumeNotFound
     */
    volumeNotFound?: any;
}
