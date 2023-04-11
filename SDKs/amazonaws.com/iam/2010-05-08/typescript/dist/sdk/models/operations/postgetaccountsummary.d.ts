import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetAccountSummaryActionEnum {
    GetAccountSummary = "GetAccountSummary"
}
export declare enum POSTGetAccountSummaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class POSTGetAccountSummaryRequest extends SpeakeasyBase {
    action: POSTGetAccountSummaryActionEnum;
    version: POSTGetAccountSummaryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetAccountSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
