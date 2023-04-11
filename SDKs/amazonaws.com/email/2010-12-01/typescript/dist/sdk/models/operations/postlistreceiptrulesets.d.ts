import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListReceiptRuleSetsActionEnum {
    ListReceiptRuleSets = "ListReceiptRuleSets"
}
export declare enum POSTListReceiptRuleSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListReceiptRuleSetsRequest extends SpeakeasyBase {
    action: POSTListReceiptRuleSetsActionEnum;
    requestBody?: Uint8Array;
    version: POSTListReceiptRuleSetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListReceiptRuleSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
