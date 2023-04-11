import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyDBClusterSnapshotAttributeActionEnum {
    ModifyDBClusterSnapshotAttribute = "ModifyDBClusterSnapshotAttribute"
}
export declare enum GETModifyDBClusterSnapshotAttributeVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETModifyDBClusterSnapshotAttributeRequest extends SpeakeasyBase {
    action: GETModifyDBClusterSnapshotAttributeActionEnum;
    /**
     * <p>The name of the DB cluster snapshot attribute to modify.</p> <p>To manage authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this value to <code>restore</code>.</p> <note> <p>To view the list of attributes available to modify, use the <a>DescribeDBClusterSnapshotAttributes</a> API operation.</p> </note>
     */
    attributeName: string;
    /**
     * The identifier for the DB cluster snapshot to modify the attributes for.
     */
    dbClusterSnapshotIdentifier: string;
    /**
     * <p>A list of DB cluster snapshot attributes to add to the attribute specified by <code>AttributeName</code>.</p> <p>To authorize other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account IDs, or <code>all</code> to make the manual DB cluster snapshot restorable by any Amazon Web Services account. Do not add the <code>all</code> value for any manual DB cluster snapshots that contain private information that you don't want available to all Amazon Web Services accounts.</p>
     */
    valuesToAdd?: string[];
    /**
     * <p>A list of DB cluster snapshot attributes to remove from the attribute specified by <code>AttributeName</code>.</p> <p>To remove authorization for other Amazon Web Services accounts to copy or restore a manual DB cluster snapshot, set this list to include one or more Amazon Web Services account identifiers, or <code>all</code> to remove authorization for any Amazon Web Services account to copy or restore the DB cluster snapshot. If you specify <code>all</code>, an Amazon Web Services account whose account ID is explicitly added to the <code>restore</code> attribute can still copy or restore a manual DB cluster snapshot.</p>
     */
    valuesToRemove?: string[];
    version: GETModifyDBClusterSnapshotAttributeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyDBClusterSnapshotAttributeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
