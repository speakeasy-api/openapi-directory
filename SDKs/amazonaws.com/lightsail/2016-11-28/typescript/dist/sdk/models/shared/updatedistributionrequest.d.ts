import { SpeakeasyBase } from "../../../internal/utils";
import { CacheBehavior } from "./cachebehavior";
import { CacheBehaviorPerPath } from "./cachebehaviorperpath";
import { CacheSettings } from "./cachesettings";
import { InputOrigin } from "./inputorigin";
export declare class UpdateDistributionRequest extends SpeakeasyBase {
    cacheBehaviorSettings?: CacheSettings;
    cacheBehaviors?: CacheBehaviorPerPath[];
    defaultCacheBehavior?: CacheBehavior;
    distributionName: string;
    isEnabled?: boolean;
    origin?: InputOrigin;
}
