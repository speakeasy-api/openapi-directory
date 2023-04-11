import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetReservedNodeExchangeConfigurationOptionsActionEnum {
    GetReservedNodeExchangeConfigurationOptions = "GetReservedNodeExchangeConfigurationOptions"
}
export declare enum POSTGetReservedNodeExchangeConfigurationOptionsVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class POSTGetReservedNodeExchangeConfigurationOptionsRequest extends SpeakeasyBase {
    action: POSTGetReservedNodeExchangeConfigurationOptionsActionEnum;
    /**
     * Pagination token
     */
    marker?: string;
    /**
     * Pagination limit
     */
    maxRecords?: string;
    requestBody?: Uint8Array;
    version: POSTGetReservedNodeExchangeConfigurationOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetReservedNodeExchangeConfigurationOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
