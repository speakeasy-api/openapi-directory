import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCopyDBClusterSnapshotActionEnum {
    CopyDBClusterSnapshot = "CopyDBClusterSnapshot"
}
export declare enum POSTCopyDBClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCopyDBClusterSnapshotRequest extends SpeakeasyBase {
    action: POSTCopyDBClusterSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTCopyDBClusterSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCopyDBClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
