import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateReceiptRuleActionEnum {
    CreateReceiptRule = "CreateReceiptRule"
}
export declare enum POSTCreateReceiptRuleVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateReceiptRuleRequest extends SpeakeasyBase {
    action: POSTCreateReceiptRuleActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateReceiptRuleVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateReceiptRuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
