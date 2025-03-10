import { SpeakeasyBase } from "../../../internal/utils";
import { Aliases } from "./aliases";
import { CacheBehaviors } from "./cachebehaviors";
import { CustomErrorResponses } from "./customerrorresponses";
import { DefaultCacheBehavior } from "./defaultcachebehavior";
import { HttpVersionEnum } from "./httpversionenum";
import { LoggingConfig } from "./loggingconfig";
import { Origins } from "./origins";
import { PriceClassEnum } from "./priceclassenum";
import { Restrictions } from "./restrictions";
import { ViewerCertificate } from "./viewercertificate";
/**
 * A distribution configuration.
 */
export declare class DistributionConfig extends SpeakeasyBase {
    aliases?: Aliases;
    cacheBehaviors?: CacheBehaviors;
    callerReference: string;
    comment: string;
    customErrorResponses?: CustomErrorResponses;
    defaultCacheBehavior: DefaultCacheBehavior;
    defaultRootObject?: string;
    enabled: boolean;
    httpVersion?: HttpVersionEnum;
    isIpv6Enabled?: boolean;
    logging?: LoggingConfig;
    origins: Origins;
    priceClass?: PriceClassEnum;
    /**
     * A complex type that identifies ways in which you want to restrict distribution of your content.
     */
    restrictions?: Restrictions;
    /**
     * <p>A complex type that specifies the following:</p> <ul> <li> <p>Which SSL/TLS certificate to use when viewers request objects using HTTPS</p> </li> <li> <p>Whether you want CloudFront to use dedicated IP addresses or SNI when you're using alternate domain names in your object names</p> </li> <li> <p>The minimum protocol version that you want CloudFront to use when communicating with viewers</p> </li> </ul> <p>For more information, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your Objects</a> in the <i>Amazon Amazon CloudFront Developer Guide</i>.</p>
     */
    viewerCertificate?: ViewerCertificate;
    webACLId?: string;
}
