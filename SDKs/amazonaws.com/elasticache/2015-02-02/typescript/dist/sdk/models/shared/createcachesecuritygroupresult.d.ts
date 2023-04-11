import { SpeakeasyBase } from "../../../internal/utils";
import { CacheSecurityGroup } from "./cachesecuritygroup";
/**
 * Success
 */
export declare class CreateCacheSecurityGroupResult extends SpeakeasyBase {
    /**
     * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>AuthorizeCacheSecurityGroupIngress</code> </p> </li> <li> <p> <code>CreateCacheSecurityGroup</code> </p> </li> <li> <p> <code>RevokeCacheSecurityGroupIngress</code> </p> </li> </ul>
     */
    cacheSecurityGroup?: CacheSecurityGroup;
}
