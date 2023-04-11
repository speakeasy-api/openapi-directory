import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
 */
export declare class CreateResponseHeadersPolicy20200531RequestBodyResponseHeadersPolicyConfig extends SpeakeasyBase {
    comment?: string;
    corsConfig?: shared.ResponseHeadersPolicyCorsConfig;
    customHeadersConfig?: shared.ResponseHeadersPolicyCustomHeadersConfig;
    name?: string;
    removeHeadersConfig?: shared.ResponseHeadersPolicyRemoveHeadersConfig;
    securityHeadersConfig?: shared.ResponseHeadersPolicySecurityHeadersConfig;
    serverTimingHeadersConfig?: shared.ResponseHeadersPolicyServerTimingHeadersConfig;
}
export declare class CreateResponseHeadersPolicy20200531RequestBody extends SpeakeasyBase {
    /**
     * <p>A response headers policy configuration.</p> <p>A response headers policy configuration contains metadata about the response headers policy, and configurations for sets of HTTP response headers.</p>
     */
    responseHeadersPolicyConfig: CreateResponseHeadersPolicy20200531RequestBodyResponseHeadersPolicyConfig;
}
export declare class CreateResponseHeadersPolicy20200531Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateResponseHeadersPolicy20200531Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
