import { SpeakeasyBase } from "../../../internal/utils";
import { CacheBehavior } from "./cachebehavior";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheSettings } from "./cachesettings";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Origin } from "./origin";
import { ResourceLocation } from "./resourcelocation";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { Tag } from "./tag";
/**
 * Describes an Amazon Lightsail content delivery network (CDN) distribution.
 */
export declare class LightsailDistribution extends SpeakeasyBase {
    ableToUpdateBundle?: boolean;
    alternativeDomainNames?: string[];
    arn?: string;
    bundleId?: string;
    cacheBehaviorSettings?: CacheSettings;
    cacheBehaviors?: CacheBehaviorPerPath[];
    certificateName?: string;
    createdAt?: Date;
    defaultCacheBehavior?: CacheBehavior;
    domainName?: string;
    ipAddressType?: IpAddressTypeEnum;
    isEnabled?: boolean;
    location?: ResourceLocation;
    name?: string;
    origin?: Origin;
    originPublicDNS?: string;
    resourceType?: ResourceTypeEnum;
    status?: string;
    supportCode?: string;
    tags?: Tag[];
}
