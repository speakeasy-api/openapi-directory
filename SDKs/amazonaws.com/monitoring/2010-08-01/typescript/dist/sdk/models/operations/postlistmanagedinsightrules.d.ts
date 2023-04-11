import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListManagedInsightRulesActionEnum {
    ListManagedInsightRules = "ListManagedInsightRules"
}
export declare enum POSTListManagedInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTListManagedInsightRulesRequest extends SpeakeasyBase {
    action: POSTListManagedInsightRulesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTListManagedInsightRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListManagedInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
