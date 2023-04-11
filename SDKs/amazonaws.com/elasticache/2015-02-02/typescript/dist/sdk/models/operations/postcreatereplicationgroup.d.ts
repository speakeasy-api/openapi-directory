import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateReplicationGroupActionEnum {
    CreateReplicationGroup = "CreateReplicationGroup"
}
export declare enum POSTCreateReplicationGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTCreateReplicationGroupRequest extends SpeakeasyBase {
    action: POSTCreateReplicationGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateReplicationGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateReplicationGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
