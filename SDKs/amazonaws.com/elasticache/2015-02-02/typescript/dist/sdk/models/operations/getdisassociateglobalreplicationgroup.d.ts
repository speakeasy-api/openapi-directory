import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDisassociateGlobalReplicationGroupActionEnum {
    DisassociateGlobalReplicationGroup = "DisassociateGlobalReplicationGroup"
}
export declare enum GETDisassociateGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETDisassociateGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: GETDisassociateGlobalReplicationGroupActionEnum;
    /**
     * The name of the Global datastore
     */
    globalReplicationGroupId: string;
    /**
     * The name of the secondary cluster you wish to remove from the Global datastore
     */
    replicationGroupId: string;
    /**
     * The Amazon region of secondary cluster you wish to remove from the Global datastore
     */
    replicationGroupRegion: string;
    version: GETDisassociateGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDisassociateGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
