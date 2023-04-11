import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetTemplateSummaryActionEnum {
    GetTemplateSummary = "GetTemplateSummary"
}
export declare enum POSTGetTemplateSummaryVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTGetTemplateSummaryRequest extends SpeakeasyBase {
    action: POSTGetTemplateSummaryActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetTemplateSummaryVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetTemplateSummaryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
