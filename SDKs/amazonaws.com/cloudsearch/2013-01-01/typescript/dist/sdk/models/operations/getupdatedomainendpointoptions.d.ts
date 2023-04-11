import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GETUpdateDomainEndpointOptionsActionEnum {
    UpdateDomainEndpointOptions = "UpdateDomainEndpointOptions"
}
/**
 * The domain's endpoint options.
 */
export declare class GETUpdateDomainEndpointOptionsDomainEndpointOptions extends SpeakeasyBase {
    enforceHTTPS?: boolean;
    tlsSecurityPolicy?: shared.TLSSecurityPolicyEnum;
}
export declare enum GETUpdateDomainEndpointOptionsVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETUpdateDomainEndpointOptionsRequest extends SpeakeasyBase {
    action: GETUpdateDomainEndpointOptionsActionEnum;
    /**
     * Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07.
     */
    domainEndpointOptions: GETUpdateDomainEndpointOptionsDomainEndpointOptions;
    /**
     * A string that represents the name of a domain.
     */
    domainName: string;
    version: GETUpdateDomainEndpointOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETUpdateDomainEndpointOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
