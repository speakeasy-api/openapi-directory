import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeSnapshotAccessActionEnum {
    AuthorizeSnapshotAccess = "AuthorizeSnapshotAccess"
}
export declare enum GETAuthorizeSnapshotAccessVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAuthorizeSnapshotAccessRequest extends SpeakeasyBase {
    /**
     * <p>The identifier of the Amazon Web Services account authorized to restore the specified snapshot.</p> <p>To share a snapshot with Amazon Web Services Support, specify amazon-redshift-support.</p>
     */
    accountWithRestoreAccess: string;
    action: GETAuthorizeSnapshotAccessActionEnum;
    /**
     * The Amazon Resource Name (ARN) of the snapshot to authorize access to.
     */
    snapshotArn?: string;
    /**
     * The identifier of the cluster the snapshot was created from. This parameter is required if your IAM user or role has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
     */
    snapshotClusterIdentifier?: string;
    /**
     * The identifier of the snapshot the account is authorized to restore.
     */
    snapshotIdentifier?: string;
    version: GETAuthorizeSnapshotAccessVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeSnapshotAccessResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
