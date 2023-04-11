import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRevokeSnapshotAccessActionEnum {
    RevokeSnapshotAccess = "RevokeSnapshotAccess"
}
export declare enum GETRevokeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETRevokeSnapshotAccessRequest extends SpeakeasyBase {
    /**
     * The identifier of the Amazon Web Services account that can no longer restore the specified snapshot.
     */
    accountWithRestoreAccess: string;
    action: GETRevokeSnapshotAccessActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the snapshot associated with the message to revoke access.
     */
    snapshotArn?: string;
    /**
     * The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user or role has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
     */
    snapshotClusterIdentifier?: string;
    /**
     * The identifier of the snapshot that the account can no longer access.
     */
    snapshotIdentifier?: string;
    version: GETRevokeSnapshotAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRevokeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
