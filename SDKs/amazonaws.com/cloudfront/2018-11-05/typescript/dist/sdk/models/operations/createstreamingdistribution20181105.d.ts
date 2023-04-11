import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The RTMP distribution's configuration information.
 */
export declare class CreateStreamingDistribution20181105RequestBodyStreamingDistributionConfig extends SpeakeasyBase {
    aliases?: shared.Aliases;
    callerReference?: string;
    comment?: string;
    enabled?: boolean;
    logging?: shared.StreamingLoggingConfig;
    priceClass?: shared.PriceClassEnum;
    s3Origin?: shared.S3Origin;
    trustedSigners?: shared.TrustedSigners;
}
export declare class CreateStreamingDistribution20181105RequestBody extends SpeakeasyBase {
    /**
     * The RTMP distribution's configuration information.
     */
    streamingDistributionConfig: CreateStreamingDistribution20181105RequestBodyStreamingDistributionConfig;
}
export declare class CreateStreamingDistribution20181105Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateStreamingDistribution20181105Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
