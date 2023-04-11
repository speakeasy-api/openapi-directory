import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetSendQuotaActionEnum {
    GetSendQuota = "GetSendQuota"
}
export declare enum POSTGetSendQuotaVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTGetSendQuotaRequest extends SpeakeasyBase {
    action: POSTGetSendQuotaActionEnum;
    version: POSTGetSendQuotaVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetSendQuotaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
