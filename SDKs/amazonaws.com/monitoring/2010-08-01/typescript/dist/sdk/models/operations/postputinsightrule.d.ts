import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutInsightRuleActionEnum {
    PutInsightRule = "PutInsightRule"
}
export declare enum POSTPutInsightRuleVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutInsightRuleRequest extends SpeakeasyBase {
    action: POSTPutInsightRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutInsightRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutInsightRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
