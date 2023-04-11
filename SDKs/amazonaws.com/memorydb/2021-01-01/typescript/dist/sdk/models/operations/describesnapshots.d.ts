import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeSnapshotsXAmzTargetEnum {
    AmazonMemoryDBDescribeSnapshots = "AmazonMemoryDB.DescribeSnapshots"
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
    contentType: string;
    /**
     * Success
     */
    describeSnapshotsResponse?: shared.DescribeSnapshotsResponse;
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
     * SnapshotNotFoundFault
     */
    snapshotNotFoundFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
