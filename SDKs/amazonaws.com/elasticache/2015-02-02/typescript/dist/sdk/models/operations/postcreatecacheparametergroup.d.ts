import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateCacheParameterGroupActionEnum {
    CreateCacheParameterGroup = "CreateCacheParameterGroup"
}
export declare enum POSTCreateCacheParameterGroupVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class POSTCreateCacheParameterGroupRequest extends SpeakeasyBase {
    action: POSTCreateCacheParameterGroupActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateCacheParameterGroupVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateCacheParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
