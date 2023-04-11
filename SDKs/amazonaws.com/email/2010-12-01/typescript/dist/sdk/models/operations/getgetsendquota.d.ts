import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETSendQuotaActionEnum {
    GetSendQuota = "GetSendQuota"
}
export declare enum GETGETSendQuotaVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETGETSendQuotaRequest extends SpeakeasyBase {
    action: GETGETSendQuotaActionEnum;
    version: GETGETSendQuotaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETSendQuotaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
