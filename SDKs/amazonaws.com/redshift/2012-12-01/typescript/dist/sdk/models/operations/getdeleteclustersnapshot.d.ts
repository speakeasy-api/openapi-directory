import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteClusterSnapshotActionEnum {
    DeleteClusterSnapshot = "DeleteClusterSnapshot"
}
export declare enum GETDeleteClusterSnapshotVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETDeleteClusterSnapshotRequest extends SpeakeasyBase {
    action: GETDeleteClusterSnapshotActionEnum;
    /**
     * <p>The unique identifier of the cluster the snapshot was created from. This parameter is required if your IAM user or role has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.</p> <p>Constraints: Must be the name of valid cluster.</p>
     */
    snapshotClusterIdentifier?: string;
    /**
     * <p>The unique identifier of the manual snapshot to be deleted.</p> <p>Constraints: Must be the name of an existing snapshot that is in the <code>available</code>, <code>failed</code>, or <code>cancelled</code> state.</p>
     */
    snapshotIdentifier: string;
    version: GETDeleteClusterSnapshotVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteClusterSnapshotResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
