import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendRawEmailActionEnum {
    SendRawEmail = "SendRawEmail"
}
export declare enum POSTSendRawEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSendRawEmailRequest extends SpeakeasyBase {
    action: POSTSendRawEmailActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendRawEmailVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendRawEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
