import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTUpdateDomainEndpointOptionsActionEnum {
    UpdateDomainEndpointOptions = "UpdateDomainEndpointOptions"
}
export declare enum POSTUpdateDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class POSTUpdateDomainEndpointOptionsRequest extends SpeakeasyBase {
    action: POSTUpdateDomainEndpointOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTUpdateDomainEndpointOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTUpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
