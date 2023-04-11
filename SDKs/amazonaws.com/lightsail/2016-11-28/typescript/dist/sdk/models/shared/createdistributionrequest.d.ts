import { SpeakeasyBase } from "../../../internal/utils";
import { CacheBehavior } from "./cachebehavior";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheSettings } from "./cachesettings";
import { InputOrigin } from "./inputorigin";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";
export declare class CreateDistributionRequest extends SpeakeasyBase {
    bundleId: string;
    cacheBehaviorSettings?: CacheSettings;
    cacheBehaviors?: CacheBehaviorPerPath[];
    defaultCacheBehavior: CacheBehavior;
    distributionName: string;
    ipAddressType?: IpAddressTypeEnum;
    origin: InputOrigin;
    tags?: Tag[];
}
