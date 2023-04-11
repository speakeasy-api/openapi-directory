import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCacheSubnetGroupActionEnum {
    CreateCacheSubnetGroup = "CreateCacheSubnetGroup"
}
export declare enum POSTCreateCacheSubnetGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTCreateCacheSubnetGroupRequest extends SpeakeasyBase {
    action: POSTCreateCacheSubnetGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCacheSubnetGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCacheSubnetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
