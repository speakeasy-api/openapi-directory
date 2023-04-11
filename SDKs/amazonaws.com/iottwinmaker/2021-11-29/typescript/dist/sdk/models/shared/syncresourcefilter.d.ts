import { SpeakeasyBase } from "../../../internal/utils";
import { SyncResourceStateEnum } from "./syncresourcestateenum";
import { SyncResourceTypeEnum } from "./syncresourcetypeenum";
/**
 * The sync resource filter.
 */
export declare class SyncResourceFilter extends SpeakeasyBase {
    externalId?: string;
    resourceId?: string;
    resourceType?: SyncResourceTypeEnum;
    state?: SyncResourceStateEnum;
}
