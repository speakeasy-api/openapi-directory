import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an instance that is part of a cluster.
**/
export declare class DbClusterMemberList extends SpeakeasyBase {
    dbClusterParameterGroupStatus?: string;
    dbInstanceIdentifier?: string;
    isClusterWriter?: boolean;
    promotionTier?: number;
}
