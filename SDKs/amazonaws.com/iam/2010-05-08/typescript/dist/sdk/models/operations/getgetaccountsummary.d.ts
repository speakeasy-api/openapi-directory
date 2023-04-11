import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETAccountSummaryActionEnum {
    GetAccountSummary = "GetAccountSummary"
}
export declare enum GETGETAccountSummaryVersionEnum {
    TwoThousandAndTen0508 = "2010-05-08"
}
export declare class GETGETAccountSummaryRequest extends SpeakeasyBase {
    action: GETGETAccountSummaryActionEnum;
    version: GETGETAccountSummaryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETAccountSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
