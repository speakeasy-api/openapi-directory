import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteInsightRulesActionEnum {
    DeleteInsightRules = "DeleteInsightRules"
}
export declare enum POSTDeleteInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTDeleteInsightRulesRequest extends SpeakeasyBase {
    action: POSTDeleteInsightRulesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteInsightRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
