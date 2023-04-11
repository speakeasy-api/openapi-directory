import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteSnapshotXAmzTargetEnum {
    DirectoryService20150416DeleteSnapshot = "DirectoryService_20150416.DeleteSnapshot"
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
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    deleteSnapshotResult?: shared.DeleteSnapshotResult;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
