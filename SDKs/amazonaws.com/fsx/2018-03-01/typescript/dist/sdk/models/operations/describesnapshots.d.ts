import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSnapshotsXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DescribeSnapshots = "AWSSimbaAPIService_v20180301.DescribeSnapshots"
}
export declare class DescribeSnapshotsRequest extends SpeakeasyBase {
    describeSnapshotsRequest: shared.DescribeSnapshotsRequest;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeSnapshotsXAmzTargetEnum;
}
export declare class DescribeSnapshotsResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    describeSnapshotsResponse?: shared.DescribeSnapshotsResponse;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * SnapshotNotFound
     */
    snapshotNotFound?: any;
}
