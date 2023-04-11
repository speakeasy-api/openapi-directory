import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListApplicationSnapshotsXAmzTargetEnum {
    KinesisAnalytics20180523ListApplicationSnapshots = "KinesisAnalytics_20180523.ListApplicationSnapshots"
}
export declare class ListApplicationSnapshotsRequest extends SpeakeasyBase {
    listApplicationSnapshotsRequest: shared.ListApplicationSnapshotsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListApplicationSnapshotsXAmzTargetEnum;
}
export declare class ListApplicationSnapshotsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * Success
     */
    listApplicationSnapshotsResponse?: shared.ListApplicationSnapshotsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
