import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETModifyGlobalReplicationGroupActionEnum {
    ModifyGlobalReplicationGroup = "ModifyGlobalReplicationGroup"
}
export declare enum GETModifyGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETModifyGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: GETModifyGlobalReplicationGroupActionEnum;
    /**
     * This parameter causes the modifications in this request and any pending modifications to be applied, asynchronously and as soon as possible. Modifications to Global Replication Groups cannot be requested to be applied in PreferredMaintenceWindow.
     */
    applyImmediately: boolean;
    /**
     * Determines whether a read replica is automatically promoted to read/write primary if the existing primary encounters a failure.
     */
    automaticFailoverEnabled?: boolean;
    /**
     * A valid cache node type that you want to scale this Global datastore to.
     */
    cacheNodeType?: string;
    /**
     * The name of the cache parameter group to use with the Global datastore. It must be compatible with the major engine version used by the Global datastore.
     */
    cacheParameterGroupName?: string;
    /**
     * The upgraded version of the cache engine to be run on the clusters in the Global datastore.
     */
    engineVersion?: string;
    /**
     * A description of the Global datastore
     */
    globalReplicationGroupDescription?: string;
    /**
     * The name of the Global datastore
     */
    globalReplicationGroupId: string;
    version: GETModifyGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETModifyGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
