import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDescribeDBSnapshotsActionEnum {
    DescribeDBSnapshots = "DescribeDBSnapshots"
}
export declare enum POSTDescribeDBSnapshotsVersionEnum {
    TwoThousandAndFourteen0901 = "2014-09-01"
}
export declare class POSTDescribeDBSnapshotsRequest extends SpeakeasyBase {
    action: POSTDescribeDBSnapshotsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDescribeDBSnapshotsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDescribeDBSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
