import { SpeakeasyBase } from "../../../internal/utils";
import { PointInTimeRecoveryStatusEnum } from "./pointintimerecoverystatusenum";
/**
 * <p>Point-in-time recovery (PITR) helps protect your Amazon Keyspaces tables from accidental write or delete operations by providing you continuous backups of your table data.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/keyspaces/latest/devguide/PointInTimeRecovery.html">Point-in-time recovery</a> in the <i>Amazon Keyspaces Developer Guide</i>.</p>
 */
export declare class PointInTimeRecovery extends SpeakeasyBase {
    status: PointInTimeRecoveryStatusEnum;
}
