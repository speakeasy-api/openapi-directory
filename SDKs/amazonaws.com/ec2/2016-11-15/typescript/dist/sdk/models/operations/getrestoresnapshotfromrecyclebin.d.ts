import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestoreSnapshotFromRecycleBinActionEnum {
    RestoreSnapshotFromRecycleBin = "RestoreSnapshotFromRecycleBin"
}
export declare enum GETRestoreSnapshotFromRecycleBinVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETRestoreSnapshotFromRecycleBinRequest extends SpeakeasyBase {
    action: GETRestoreSnapshotFromRecycleBinActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the snapshot to restore.
     */
    snapshotId: string;
    version: GETRestoreSnapshotFromRecycleBinVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestoreSnapshotFromRecycleBinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
