import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDBClusterSnapshotActionEnum {
    DeleteDBClusterSnapshot = "DeleteDBClusterSnapshot"
}
export declare enum POSTDeleteDBClusterSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTDeleteDBClusterSnapshotRequest extends SpeakeasyBase {
    action: POSTDeleteDBClusterSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDBClusterSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDBClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
