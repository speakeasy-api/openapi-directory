import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetInsightRuleReportActionEnum {
    GetInsightRuleReport = "GetInsightRuleReport"
}
export declare enum POSTGetInsightRuleReportVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTGetInsightRuleReportRequest extends SpeakeasyBase {
    action: POSTGetInsightRuleReportActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetInsightRuleReportVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetInsightRuleReportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
