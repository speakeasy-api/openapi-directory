import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListManagedInsightRulesActionEnum {
    ListManagedInsightRules = "ListManagedInsightRules"
}
export declare enum GETListManagedInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class GETListManagedInsightRulesRequest extends SpeakeasyBase {
    action: GETListManagedInsightRulesActionEnum;
    /**
     *  The maximum number of results to return in one operation. If you omit this parameter, the default number is used. The default number is <code>100</code>.
     */
    maxResults?: number;
    /**
     *  Include this value to get the next set of rules if the value was returned by the previous operation.
     */
    nextToken?: string;
    /**
     *  The ARN of an Amazon Web Services resource that has managed Contributor Insights rules.
     */
    resourceARN: string;
    version: GETListManagedInsightRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListManagedInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
