import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
 */
export declare class UpdateCloudFrontOriginAccessIdentity20180618RequestBodyCloudFrontOriginAccessIdentityConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
}
export declare class UpdateCloudFrontOriginAccessIdentity20180618RequestBody extends SpeakeasyBase {
    /**
     * Origin access identity configuration. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
     */
    cloudFrontOriginAccessIdentityConfig: UpdateCloudFrontOriginAccessIdentity20180618RequestBodyCloudFrontOriginAccessIdentityConfig;
}
export declare class UpdateCloudFrontOriginAccessIdentity20180618Request extends SpeakeasyBase {
    /**
     * The identity's id.
     */
    id: string;
    /**
     * The value of the <code>ETag</code> header that you received when retrieving the identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
     */
    ifMatch?: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateCloudFrontOriginAccessIdentity20180618Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
