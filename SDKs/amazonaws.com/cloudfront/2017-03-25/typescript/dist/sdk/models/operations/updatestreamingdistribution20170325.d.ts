import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The RTMP distribution's configuration information.
 */
export declare class UpdateStreamingDistribution20170325RequestBodyStreamingDistributionConfig extends SpeakeasyBase {
    aliases?: shared.Aliases;
    callerReference?: string;
    comment?: string;
    enabled?: boolean;
    logging?: shared.StreamingLoggingConfig;
    priceClass?: shared.PriceClassEnum;
    s3Origin?: shared.S3Origin;
    trustedSigners?: shared.TrustedSigners;
}
export declare class UpdateStreamingDistribution20170325RequestBody extends SpeakeasyBase {
    /**
     * The RTMP distribution's configuration information.
     */
    streamingDistributionConfig: UpdateStreamingDistribution20170325RequestBodyStreamingDistributionConfig;
}
export declare class UpdateStreamingDistribution20170325Request extends SpeakeasyBase {
    /**
     * The streaming distribution's id.
     */
    id: string;
    /**
     * The value of the <code>ETag</code> header that you received when retrieving the streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.
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
export declare class UpdateStreamingDistribution20170325Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
