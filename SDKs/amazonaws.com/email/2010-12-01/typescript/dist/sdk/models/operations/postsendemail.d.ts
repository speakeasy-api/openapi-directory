import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendEmailActionEnum {
    SendEmail = "SendEmail"
}
export declare enum POSTSendEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSendEmailRequest extends SpeakeasyBase {
    action: POSTSendEmailActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendEmailVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
