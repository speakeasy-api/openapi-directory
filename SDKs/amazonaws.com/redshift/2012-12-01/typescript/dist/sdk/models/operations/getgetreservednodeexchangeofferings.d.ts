import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETGETReservedNodeExchangeOfferingsActionEnum {
    GetReservedNodeExchangeOfferings = "GetReservedNodeExchangeOfferings"
}
export declare enum GETGETReservedNodeExchangeOfferingsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETGETReservedNodeExchangeOfferingsRequest extends SpeakeasyBase {
    action: GETGETReservedNodeExchangeOfferingsActionEnum;
    /**
     * A value that indicates the starting point for the next set of ReservedNodeOfferings.
     */
    marker?: string;
    /**
     * An integer setting the maximum number of ReservedNodeOfferings to retrieve.
     */
    maxRecords?: number;
    /**
     * A string representing the node identifier for the DC1 Reserved Node to be exchanged.
     */
    reservedNodeId: string;
    version: GETGETReservedNodeExchangeOfferingsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETGETReservedNodeExchangeOfferingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
