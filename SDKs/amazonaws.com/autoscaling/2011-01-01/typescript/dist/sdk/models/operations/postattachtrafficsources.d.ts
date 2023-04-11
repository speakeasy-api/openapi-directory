import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAttachTrafficSourcesActionEnum {
    AttachTrafficSources = "AttachTrafficSources"
}
export declare enum POSTAttachTrafficSourcesVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTAttachTrafficSourcesRequest extends SpeakeasyBase {
    action: POSTAttachTrafficSourcesActionEnum;
    requestBody?: Uint8Array;
    version: POSTAttachTrafficSourcesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAttachTrafficSourcesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
