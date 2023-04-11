import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendBounceActionEnum {
    SendBounce = "SendBounce"
}
export declare enum POSTSendBounceVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSendBounceRequest extends SpeakeasyBase {
    action: POSTSendBounceActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendBounceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendBounceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
