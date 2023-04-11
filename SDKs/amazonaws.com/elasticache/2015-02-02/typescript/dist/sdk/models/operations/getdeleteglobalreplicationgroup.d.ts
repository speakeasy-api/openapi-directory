import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteGlobalReplicationGroupActionEnum {
    DeleteGlobalReplicationGroup = "DeleteGlobalReplicationGroup"
}
export declare enum GETDeleteGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDeleteGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: GETDeleteGlobalReplicationGroupActionEnum;
    /**
     * The name of the Global datastore
     */
    globalReplicationGroupId: string;
    /**
     * The primary replication group is retained as a standalone replication group.
     */
    retainPrimaryReplicationGroup: boolean;
    version: GETDeleteGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
