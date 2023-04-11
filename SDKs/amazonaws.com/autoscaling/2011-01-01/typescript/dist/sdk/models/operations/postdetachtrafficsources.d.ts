import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachTrafficSourcesActionEnum {
    DetachTrafficSources = "DetachTrafficSources"
}
export declare enum POSTDetachTrafficSourcesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTDetachTrafficSourcesRequest extends SpeakeasyBase {
    action: POSTDetachTrafficSourcesActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachTrafficSourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachTrafficSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
