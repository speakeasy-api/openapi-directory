import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateSnapshotXAmzTargetEnum {
    DirectoryService20150416CreateSnapshot = "DirectoryService_20150416.CreateSnapshot"
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
     * ClientException
     */
    clientException?: any;
    contentType: string;
    /**
     * Success
     */
    createSnapshotResult?: shared.CreateSnapshotResult;
    /**
     * EntityDoesNotExistException
     */
    entityDoesNotExistException?: any;
    /**
     * InvalidParameterException
     */
    invalidParameterException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
    /**
     * SnapshotLimitExceededException
     */
    snapshotLimitExceededException?: any;
}
