import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTBatchModifyClusterSnapshotsActionEnum {
    BatchModifyClusterSnapshots = "BatchModifyClusterSnapshots"
}
export declare enum POSTBatchModifyClusterSnapshotsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTBatchModifyClusterSnapshotsRequest extends SpeakeasyBase {
    action: POSTBatchModifyClusterSnapshotsActionEnum;
    requestBody?: Uint8Array;
    version: POSTBatchModifyClusterSnapshotsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTBatchModifyClusterSnapshotsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
