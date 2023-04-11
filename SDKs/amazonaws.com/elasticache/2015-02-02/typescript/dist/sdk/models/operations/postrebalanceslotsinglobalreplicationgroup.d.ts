import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRebalanceSlotsInGlobalReplicationGroupActionEnum {
    RebalanceSlotsInGlobalReplicationGroup = "RebalanceSlotsInGlobalReplicationGroup"
}
export declare enum POSTRebalanceSlotsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTRebalanceSlotsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: POSTRebalanceSlotsInGlobalReplicationGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTRebalanceSlotsInGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRebalanceSlotsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
