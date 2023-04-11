import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The caching configuration for a resolver that has caching activated.
 */
export declare class CachingConfig extends SpeakeasyBase {
    cachingKeys?: string[];
    ttl: number;
}
