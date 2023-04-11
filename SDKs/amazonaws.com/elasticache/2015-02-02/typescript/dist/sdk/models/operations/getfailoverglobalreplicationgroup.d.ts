import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETFailoverGlobalReplicationGroupActionEnum {
    FailoverGlobalReplicationGroup = "FailoverGlobalReplicationGroup"
}
export declare enum GETFailoverGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETFailoverGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: GETFailoverGlobalReplicationGroupActionEnum;
    /**
     * The name of the Global datastore
     */
    globalReplicationGroupId: string;
    /**
     * The Amazon region of the primary cluster of the Global datastore
     */
    primaryRegion: string;
    /**
     * The name of the primary replication group
     */
    primaryReplicationGroupId: string;
    version: GETFailoverGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETFailoverGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
