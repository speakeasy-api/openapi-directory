import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAcceptReservedNodeExchangeActionEnum {
    AcceptReservedNodeExchange = "AcceptReservedNodeExchange"
}
export declare enum GETAcceptReservedNodeExchangeVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAcceptReservedNodeExchangeRequest extends SpeakeasyBase {
    action: GETAcceptReservedNodeExchangeActionEnum;
    /**
     * A string representing the node identifier of the DC1 Reserved Node to be exchanged.
     */
    reservedNodeId: string;
    /**
     * The unique identifier of the DC2 Reserved Node offering to be used for the exchange. You can obtain the value for the parameter by calling <a>GetReservedNodeExchangeOfferings</a>
     */
    targetReservedNodeOfferingId: string;
    version: GETAcceptReservedNodeExchangeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAcceptReservedNodeExchangeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
