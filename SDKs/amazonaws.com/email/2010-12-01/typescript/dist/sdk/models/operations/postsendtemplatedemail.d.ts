import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendTemplatedEmailActionEnum {
    SendTemplatedEmail = "SendTemplatedEmail"
}
export declare enum POSTSendTemplatedEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSendTemplatedEmailRequest extends SpeakeasyBase {
    action: POSTSendTemplatedEmailActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendTemplatedEmailVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendTemplatedEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
