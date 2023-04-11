import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListReceiptRuleSetsActionEnum {
    ListReceiptRuleSets = "ListReceiptRuleSets"
}
export declare enum GETListReceiptRuleSetsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETListReceiptRuleSetsRequest extends SpeakeasyBase {
    action: GETListReceiptRuleSetsActionEnum;
    /**
     * A token returned from a previous call to <code>ListReceiptRuleSets</code> to indicate the position in the receipt rule set list.
     */
    nextToken?: string;
    version: GETListReceiptRuleSetsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListReceiptRuleSetsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
