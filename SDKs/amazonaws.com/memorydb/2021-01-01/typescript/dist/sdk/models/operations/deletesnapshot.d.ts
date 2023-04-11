import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSnapshotXAmzTargetEnum {
    AmazonMemoryDBDeleteSnapshot = "AmazonMemoryDB.DeleteSnapshot"
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
    contentType: string;
    /**
     * Success
     */
    deleteSnapshotResponse?: shared.DeleteSnapshotResponse;
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
     * SnapshotNotFoundFault
     */
    snapshotNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
