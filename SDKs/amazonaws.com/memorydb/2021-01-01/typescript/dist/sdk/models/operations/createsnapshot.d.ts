import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSnapshotXAmzTargetEnum {
    AmazonMemoryDBCreateSnapshot = "AmazonMemoryDB.CreateSnapshot"
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
     * ClusterNotFoundFault
     */
    clusterNotFoundFault?: any;
    contentType: string;
    /**
     * Success
     */
    createSnapshotResponse?: shared.CreateSnapshotResponse;
    /**
     * InvalidClusterStateFault
     */
    invalidClusterStateFault?: any;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * ServiceLinkedRoleNotFoundFault
     */
    serviceLinkedRoleNotFoundFault?: any;
    /**
     * SnapshotAlreadyExistsFault
     */
    snapshotAlreadyExistsFault?: any;
    /**
     * SnapshotQuotaExceededFault
     */
    snapshotQuotaExceededFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagQuotaPerResourceExceeded
     */
    tagQuotaPerResourceExceeded?: any;
}
