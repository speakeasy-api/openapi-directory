import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RestoreFromSnapshotXAmzTargetEnum {
    DirectoryService20150416RestoreFromSnapshot = "DirectoryService_20150416.RestoreFromSnapshot"
}
export declare class RestoreFromSnapshotRequest extends SpeakeasyBase {
    restoreFromSnapshotRequest: shared.RestoreFromSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreFromSnapshotXAmzTargetEnum;
}
export declare class RestoreFromSnapshotResponse extends SpeakeasyBase {
    /**
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    /**
     * Success
     */
    restoreFromSnapshotResult?: Record<string, any>;
    /**
     * ServiceException
     */
    serviceException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
