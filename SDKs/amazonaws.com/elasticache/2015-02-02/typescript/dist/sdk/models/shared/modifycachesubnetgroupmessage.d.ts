import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>ModifyCacheSubnetGroup</code> operation.
 */
export declare class ModifyCacheSubnetGroupMessage extends SpeakeasyBase {
    cacheSubnetGroupDescription?: string;
    cacheSubnetGroupName: string;
    subnetIds?: string[];
}
