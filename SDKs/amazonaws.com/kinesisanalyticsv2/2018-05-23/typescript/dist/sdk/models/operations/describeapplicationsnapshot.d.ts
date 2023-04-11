import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeApplicationSnapshotXAmzTargetEnum {
    KinesisAnalytics20180523DescribeApplicationSnapshot = "KinesisAnalytics_20180523.DescribeApplicationSnapshot"
}
export declare class DescribeApplicationSnapshotRequest extends SpeakeasyBase {
    describeApplicationSnapshotRequest: shared.DescribeApplicationSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeApplicationSnapshotXAmzTargetEnum;
}
export declare class DescribeApplicationSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeApplicationSnapshotResponse?: shared.DescribeApplicationSnapshotResponse;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedOperationException
     */
    unsupportedOperationException?: any;
}
