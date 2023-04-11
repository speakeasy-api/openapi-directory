import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateIpamPoolActionEnum {
    CreateIpamPool = "CreateIpamPool"
}
export declare enum POSTCreateIpamPoolVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateIpamPoolRequest extends SpeakeasyBase {
    action: POSTCreateIpamPoolActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateIpamPoolVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateIpamPoolResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
