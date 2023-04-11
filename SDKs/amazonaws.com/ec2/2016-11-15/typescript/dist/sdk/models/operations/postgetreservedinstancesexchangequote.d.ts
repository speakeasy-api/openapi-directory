import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetReservedInstancesExchangeQuoteActionEnum {
    GetReservedInstancesExchangeQuote = "GetReservedInstancesExchangeQuote"
}
export declare enum POSTGetReservedInstancesExchangeQuoteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
    action: POSTGetReservedInstancesExchangeQuoteActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetReservedInstancesExchangeQuoteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetReservedInstancesExchangeQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
