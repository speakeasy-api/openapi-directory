import { SpeakeasyBase } from "../../../internal/utils";
import { SyncResourceStatus } from "./syncresourcestatus";
import { SyncResourceTypeEnum } from "./syncresourcetypeenum";
/**
 * The sync resource summary.
 */
export declare class SyncResourceSummary extends SpeakeasyBase {
    externalId?: string;
    resourceId?: string;
    resourceType?: SyncResourceTypeEnum;
    status?: SyncResourceStatus;
    updateDateTime?: Date;
}
