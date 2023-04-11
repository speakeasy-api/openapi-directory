import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRestoreSnapshotTierActionEnum {
    RestoreSnapshotTier = "RestoreSnapshotTier"
}
export declare enum GETRestoreSnapshotTierVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETRestoreSnapshotTierRequest extends SpeakeasyBase {
    action: GETRestoreSnapshotTierActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * Indicates whether to permanently restore an archived snapshot. To permanently restore an archived snapshot, specify <code>true</code> and omit the <b>RestoreSnapshotTierRequest$TemporaryRestoreDays</b> parameter.
     */
    permanentRestore?: boolean;
    /**
     * The ID of the snapshot to restore.
     */
    snapshotId: string;
    /**
     * <p>Specifies the number of days for which to temporarily restore an archived snapshot. Required for temporary restores only. The snapshot will be automatically re-archived after this period.</p> <p>To temporarily restore an archived snapshot, specify the number of days and omit the <b>PermanentRestore</b> parameter or set it to <code>false</code>.</p>
     */
    temporaryRestoreDays?: number;
    version: GETRestoreSnapshotTierVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRestoreSnapshotTierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
