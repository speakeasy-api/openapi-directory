import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTPutManagedInsightRulesActionEnum {
    PutManagedInsightRules = "PutManagedInsightRules"
}
export declare enum POSTPutManagedInsightRulesVersionEnum {
    TwoThousandAndTen0801 = "2010-08-01"
}
export declare class POSTPutManagedInsightRulesRequest extends SpeakeasyBase {
    action: POSTPutManagedInsightRulesActionEnum;
    requestBody?: Uint8Array;
    version: POSTPutManagedInsightRulesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTPutManagedInsightRulesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
