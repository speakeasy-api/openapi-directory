import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSendBulkTemplatedEmailActionEnum {
    SendBulkTemplatedEmail = "SendBulkTemplatedEmail"
}
export declare enum POSTSendBulkTemplatedEmailVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSendBulkTemplatedEmailRequest extends SpeakeasyBase {
    action: POSTSendBulkTemplatedEmailActionEnum;
    requestBody?: Uint8Array;
    version: POSTSendBulkTemplatedEmailVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSendBulkTemplatedEmailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
