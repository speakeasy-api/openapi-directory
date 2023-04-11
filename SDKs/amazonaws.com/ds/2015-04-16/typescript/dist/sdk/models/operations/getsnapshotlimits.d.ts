import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSnapshotLimitsXAmzTargetEnum {
    DirectoryService20150416GetSnapshotLimits = "DirectoryService_20150416.GetSnapshotLimits"
}
export declare class GetSnapshotLimitsRequest extends SpeakeasyBase {
    getSnapshotLimitsRequest: shared.GetSnapshotLimitsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSnapshotLimitsXAmzTargetEnum;
}
export declare class GetSnapshotLimitsResponse extends SpeakeasyBase {
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
     * Success
     */
    getSnapshotLimitsResult?: shared.GetSnapshotLimitsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceException
     */
    serviceException?: any;
}
