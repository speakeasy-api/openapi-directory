import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifySnapshotTierActionEnum {
    ModifySnapshotTier = "ModifySnapshotTier"
}
/**
 * The name of the storage tier. You must specify <code>archive</code>.
 */
export declare enum GETModifySnapshotTierStorageTierEnum {
    Archive = "archive"
}
export declare enum GETModifySnapshotTierVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETModifySnapshotTierRequest extends SpeakeasyBase {
    action: GETModifySnapshotTierActionEnum;
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The ID of the snapshot.
     */
    snapshotId: string;
    /**
     * The name of the storage tier. You must specify <code>archive</code>.
     */
    storageTier?: GETModifySnapshotTierStorageTierEnum;
    version: GETModifySnapshotTierVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifySnapshotTierResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
