import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisableFastSnapshotRestoresActionEnum {
    DisableFastSnapshotRestores = "DisableFastSnapshotRestores"
}
export declare enum GETDisableFastSnapshotRestoresVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETDisableFastSnapshotRestoresRequest extends SpeakeasyBase {
    action: GETDisableFastSnapshotRestoresActionEnum;
    /**
     * One or more Availability Zones. For example, <code>us-east-2a</code>.
     */
    availabilityZone: string[];
    /**
     * Checks whether you have the required permissions for the action, without actually making the request, and provides an error response. If you have the required permissions, the error response is <code>DryRunOperation</code>. Otherwise, it is <code>UnauthorizedOperation</code>.
     */
    dryRun?: boolean;
    /**
     * The IDs of one or more snapshots. For example, <code>snap-1234567890abcdef0</code>.
     */
    sourceSnapshotId: string[];
    version: GETDisableFastSnapshotRestoresVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisableFastSnapshotRestoresResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
