import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnableInsightRulesActionEnum {
    EnableInsightRules = "EnableInsightRules"
}
export declare enum POSTEnableInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTEnableInsightRulesRequest extends SpeakeasyBase {
    action: POSTEnableInsightRulesActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnableInsightRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnableInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
