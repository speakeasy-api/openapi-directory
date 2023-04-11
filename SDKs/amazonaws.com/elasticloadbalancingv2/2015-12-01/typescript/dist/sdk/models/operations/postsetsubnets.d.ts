import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetSubnetsActionEnum {
    SetSubnets = "SetSubnets"
}
export declare enum POSTSetSubnetsVersionEnum {
    TwoThousandAndFifteen1201 = "2015-12-01"
}
export declare class POSTSetSubnetsRequest extends SpeakeasyBase {
    action: POSTSetSubnetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetSubnetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetSubnetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
