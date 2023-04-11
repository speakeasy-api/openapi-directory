import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetReceiptRulePositionActionEnum {
    SetReceiptRulePosition = "SetReceiptRulePosition"
}
export declare enum POSTSetReceiptRulePositionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTSetReceiptRulePositionRequest extends SpeakeasyBase {
    action: POSTSetReceiptRulePositionActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetReceiptRulePositionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetReceiptRulePositionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
