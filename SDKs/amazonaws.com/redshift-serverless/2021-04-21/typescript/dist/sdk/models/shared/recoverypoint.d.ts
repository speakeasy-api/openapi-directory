import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The automatically created recovery point of a namespace. Recovery points are created every 30 minutes and kept for 24 hours.
 */
export declare class RecoveryPoint extends SpeakeasyBase {
    namespaceArn?: string;
    namespaceName?: string;
    recoveryPointCreateTime?: Date;
    recoveryPointId?: string;
    totalSizeInMegaBytes?: number;
    workgroupName?: string;
}
