import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetTransitGatewayPrefixListReferencesActionEnum {
    GetTransitGatewayPrefixListReferences = "GetTransitGatewayPrefixListReferences"
}
export declare enum POSTGetTransitGatewayPrefixListReferencesVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetTransitGatewayPrefixListReferencesRequest extends SpeakeasyBase {
    action: POSTGetTransitGatewayPrefixListReferencesActionEnum;
    /**
     * Pagination limit
     */
    maxResults?: string;
    /**
     * Pagination token
     */
    nextToken?: string;
    requestBody?: Uint8Array;
    version: POSTGetTransitGatewayPrefixListReferencesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetTransitGatewayPrefixListReferencesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
