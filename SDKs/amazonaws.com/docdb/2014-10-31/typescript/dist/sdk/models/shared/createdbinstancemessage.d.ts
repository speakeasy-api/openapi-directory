import { SpeakeasyBase } from "../../../internal/utils";
import { TagList } from "./taglist";
/**
 * Represents the input to <a>CreateDBInstance</a>.
 */
export declare class CreateDBInstanceMessage extends SpeakeasyBase {
    autoMinorVersionUpgrade?: boolean;
    availabilityZone?: string;
    copyTagsToSnapshot?: boolean;
    dbClusterIdentifier: string;
    dbInstanceClass: string;
    dbInstanceIdentifier: string;
    enablePerformanceInsights?: boolean;
    engine: string;
    performanceInsightsKMSKeyId?: string;
    preferredMaintenanceWindow?: string;
    promotionTier?: number;
    tags?: TagList[];
}
