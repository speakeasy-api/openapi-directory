import { SpeakeasyBase } from "../../../internal/utils";
import { NetworkTypeEnum } from "./networktypeenum";
import { SubnetList } from "./subnetlist";
/**
 * <p>Represents the output of one of the following operations:</p> <ul> <li> <p> <code>CreateCacheSubnetGroup</code> </p> </li> <li> <p> <code>ModifyCacheSubnetGroup</code> </p> </li> </ul>
 */
export declare class CacheSubnetGroups extends SpeakeasyBase {
    arn?: string;
    cacheSubnetGroupDescription?: string;
    cacheSubnetGroupName?: string;
    subnets?: SubnetList[];
    supportedNetworkTypes?: NetworkTypeEnum[];
    vpcId?: string;
}
