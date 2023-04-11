import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDescribeDBSnapshotsActionEnum {
    DescribeDBSnapshots = "DescribeDBSnapshots"
}
export declare enum GETDescribeDBSnapshotsVersionEnum {
    TwoThousandAndThirteen0110 = "2013-01-10"
}
export declare class GETDescribeDBSnapshotsRequest extends SpeakeasyBase {
    action: GETDescribeDBSnapshotsActionEnum;
    dbInstanceIdentifier?: string;
    dbSnapshotIdentifier?: string;
    marker?: string;
    maxRecords?: number;
    snapshotType?: string;
    version: GETDescribeDBSnapshotsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDescribeDBSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
