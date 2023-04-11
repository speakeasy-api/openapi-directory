import { SpeakeasyBase } from "../../../internal/utils";
import { ApiCacheStatusEnum } from "./apicachestatusenum";
import { ApiCacheTypeEnum } from "./apicachetypeenum";
import { ApiCachingBehaviorEnum } from "./apicachingbehaviorenum";
/**
 * The <code>ApiCache</code> object.
 */
export declare class ApiCache extends SpeakeasyBase {
    apiCachingBehavior?: ApiCachingBehaviorEnum;
    atRestEncryptionEnabled?: boolean;
    status?: ApiCacheStatusEnum;
    transitEncryptionEnabled?: boolean;
    ttl?: number;
    type?: ApiCacheTypeEnum;
}
