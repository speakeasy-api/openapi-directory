import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about an instance that is part of a DB cluster.
 */
export declare class DBClusterMemberList extends SpeakeasyBase {
    dbClusterParameterGroupStatus?: string;
    dbInstanceIdentifier?: string;
    isClusterWriter?: boolean;
    promotionTier?: number;
}
