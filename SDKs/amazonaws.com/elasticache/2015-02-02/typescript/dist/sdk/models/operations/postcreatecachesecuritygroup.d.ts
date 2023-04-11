import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCacheSecurityGroupActionEnum {
    CreateCacheSecurityGroup = "CreateCacheSecurityGroup"
}
export declare enum POSTCreateCacheSecurityGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTCreateCacheSecurityGroupRequest extends SpeakeasyBase {
    action: POSTCreateCacheSecurityGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCacheSecurityGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCacheSecurityGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
