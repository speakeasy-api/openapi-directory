import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBatchDeleteClusterSnapshotsActionEnum {
    BatchDeleteClusterSnapshots = "BatchDeleteClusterSnapshots"
}
export declare enum POSTBatchDeleteClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTBatchDeleteClusterSnapshotsRequest extends SpeakeasyBase {
    action: POSTBatchDeleteClusterSnapshotsActionEnum;
    requestBody?: Uint8Array;
    version: POSTBatchDeleteClusterSnapshotsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTBatchDeleteClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
