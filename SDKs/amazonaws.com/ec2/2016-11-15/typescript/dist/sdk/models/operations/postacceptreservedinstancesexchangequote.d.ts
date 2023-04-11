import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAcceptReservedInstancesExchangeQuoteActionEnum {
    AcceptReservedInstancesExchangeQuote = "AcceptReservedInstancesExchangeQuote"
}
export declare enum POSTAcceptReservedInstancesExchangeQuoteVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAcceptReservedInstancesExchangeQuoteRequest extends SpeakeasyBase {
    action: POSTAcceptReservedInstancesExchangeQuoteActionEnum;
    requestBody?: Uint8Array;
    version: POSTAcceptReservedInstancesExchangeQuoteVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAcceptReservedInstancesExchangeQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
