import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A distribution configuration.
 */
export declare class CreateDistribution20161125RequestBodyDistributionConfig extends SpeakeasyBase {
    aliases?: shared.Aliases;
    cacheBehaviors?: shared.CacheBehaviors;
    callerReference?: string;
    comment?: string;
    customErrorResponses?: shared.CustomErrorResponses;
    defaultCacheBehavior?: shared.DefaultCacheBehavior;
    defaultRootObject?: string;
    enabled?: boolean;
    httpVersion?: shared.HttpVersionEnum;
    isIpv6Enabled?: boolean;
    logging?: shared.LoggingConfig;
    origins?: shared.Origins;
    priceClass?: shared.PriceClassEnum;
    /**
     * A complex type that identifies ways in which you want to restrict distribution of your content.
     */
    restrictions?: shared.Restrictions;
    /**
     * <p>A complex type that specifies the following:</p> <ul> <li> <p>Which SSL/TLS certificate to use when viewers request objects using HTTPS</p> </li> <li> <p>Whether you want CloudFront to use dedicated IP addresses or SNI when you're using alternate domain names in your object names</p> </li> <li> <p>The minimum protocol version that you want CloudFront to use when communicating with viewers</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your Objects</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p>
     */
    viewerCertificate?: shared.ViewerCertificate;
    webACLId?: string;
}
export declare class CreateDistribution20161125RequestBody extends SpeakeasyBase {
    /**
     * A distribution configuration.
     */
    distributionConfig: CreateDistribution20161125RequestBodyDistributionConfig;
}
export declare class CreateDistribution20161125Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDistribution20161125Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
