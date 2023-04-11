import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRebalanceSlotsInGlobalReplicationGroupActionEnum {
    RebalanceSlotsInGlobalReplicationGroup = "RebalanceSlotsInGlobalReplicationGroup"
}
export declare enum GETRebalanceSlotsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETRebalanceSlotsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: GETRebalanceSlotsInGlobalReplicationGroupActionEnum;
    /**
     * If <code>True</code>, redistribution is applied immediately.
     */
    applyImmediately: boolean;
    /**
     * The name of the Global datastore
     */
    globalReplicationGroupId: string;
    version: GETRebalanceSlotsInGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRebalanceSlotsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
