import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnum {
    IncreaseNodeGroupsInGlobalReplicationGroup = "IncreaseNodeGroupsInGlobalReplicationGroup"
}
export declare enum POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTIncreaseNodeGroupsInGlobalReplicationGroupRequest extends SpeakeasyBase {
    action: POSTIncreaseNodeGroupsInGlobalReplicationGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTIncreaseNodeGroupsInGlobalReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTIncreaseNodeGroupsInGlobalReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
