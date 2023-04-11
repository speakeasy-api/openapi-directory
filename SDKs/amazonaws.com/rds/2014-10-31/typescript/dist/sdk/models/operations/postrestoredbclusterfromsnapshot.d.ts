import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreDBClusterFromSnapshotActionEnum {
    RestoreDBClusterFromSnapshot = "RestoreDBClusterFromSnapshot"
}
export declare enum POSTRestoreDBClusterFromSnapshotVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTRestoreDBClusterFromSnapshotRequest extends SpeakeasyBase {
    action: POSTRestoreDBClusterFromSnapshotActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreDBClusterFromSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreDBClusterFromSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
