import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyIpamPoolActionEnum {
    ModifyIpamPool = "ModifyIpamPool"
}
export declare enum POSTModifyIpamPoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyIpamPoolRequest extends SpeakeasyBase {
    action: POSTModifyIpamPoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyIpamPoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyIpamPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
