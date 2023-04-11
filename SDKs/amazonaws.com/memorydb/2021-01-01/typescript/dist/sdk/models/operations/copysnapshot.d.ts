import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CopySnapshotXAmzTargetEnum {
    AmazonMemoryDBCopySnapshot = "AmazonMemoryDB.CopySnapshot"
}
export declare class CopySnapshotRequest extends SpeakeasyBase {
    copySnapshotRequest: shared.CopySnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CopySnapshotXAmzTargetEnum;
}
export declare class CopySnapshotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    copySnapshotResponse?: shared.CopySnapshotResponse;
    /**
     * InvalidParameterCombinationException
     */
    invalidParameterCombinationException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * InvalidSnapshotStateFault
     */
    invalidSnapshotStateFault?: any;
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
     * SnapshotNotFoundFault
     */
    snapshotNotFoundFault?: any;
    /**
     * TagQuotaPerResourceExceeded
     */
    tagQuotaPerResourceExceeded?: any;
}
