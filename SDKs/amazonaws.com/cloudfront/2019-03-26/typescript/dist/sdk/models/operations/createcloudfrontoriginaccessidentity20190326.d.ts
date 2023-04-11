import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
 */
export declare class CreateCloudFrontOriginAccessIdentity20190326RequestBodyCloudFrontOriginAccessIdentityConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
}
export declare class CreateCloudFrontOriginAccessIdentity20190326RequestBody extends SpeakeasyBase {
    /**
     * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
     */
    cloudFrontOriginAccessIdentityConfig: CreateCloudFrontOriginAccessIdentity20190326RequestBodyCloudFrontOriginAccessIdentityConfig;
}
export declare class CreateCloudFrontOriginAccessIdentity20190326Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateCloudFrontOriginAccessIdentity20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
