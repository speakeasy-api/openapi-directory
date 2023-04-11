import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteReceiptRuleActionEnum {
    DeleteReceiptRule = "DeleteReceiptRule"
}
export declare enum POSTDeleteReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTDeleteReceiptRuleRequest extends SpeakeasyBase {
    action: POSTDeleteReceiptRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteReceiptRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
