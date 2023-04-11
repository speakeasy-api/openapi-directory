import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAddSourceIdentifierToSubscriptionActionEnum {
    AddSourceIdentifierToSubscription = "AddSourceIdentifierToSubscription"
}
export declare enum GETAddSourceIdentifierToSubscriptionVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETAddSourceIdentifierToSubscriptionRequest extends SpeakeasyBase {
    action: GETAddSourceIdentifierToSubscriptionActionEnum;
    /**
     * <p>The identifier of the event source to be added.</p> <p>Constraints:</p> <ul> <li> <p>If the source type is a DB instance, a <code>DBInstanceIdentifier</code> value must be supplied.</p> </li> <li> <p>If the source type is a DB cluster, a <code>DBClusterIdentifier</code> value must be supplied.</p> </li> <li> <p>If the source type is a DB parameter group, a <code>DBParameterGroupName</code> value must be supplied.</p> </li> <li> <p>If the source type is a DB security group, a <code>DBSecurityGroupName</code> value must be supplied.</p> </li> <li> <p>If the source type is a DB snapshot, a <code>DBSnapshotIdentifier</code> value must be supplied.</p> </li> <li> <p>If the source type is a DB cluster snapshot, a <code>DBClusterSnapshotIdentifier</code> value must be supplied.</p> </li> <li> <p>If the source type is an RDS Proxy, a <code>DBProxyName</code> value must be supplied.</p> </li> </ul>
     */
    sourceIdentifier: string;
    /**
     * The name of the RDS event notification subscription you want to add a source identifier to.
     */
    subscriptionName: string;
    version: GETAddSourceIdentifierToSubscriptionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAddSourceIdentifierToSubscriptionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
