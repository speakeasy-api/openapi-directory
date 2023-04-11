import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>ModifyDBInstance</a>.
 */
export declare class ModifyDBInstanceMessage extends SpeakeasyBase {
    applyImmediately?: boolean;
    autoMinorVersionUpgrade?: boolean;
    caCertificateIdentifier?: string;
    copyTagsToSnapshot?: boolean;
    dbInstanceClass?: string;
    dbInstanceIdentifier: string;
    enablePerformanceInsights?: boolean;
    newDBInstanceIdentifier?: string;
    performanceInsightsKMSKeyId?: string;
    preferredMaintenanceWindow?: string;
    promotionTier?: number;
}
