import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRefreshLivePoolProgress } from "./instancerefreshlivepoolprogress";
import { InstanceRefreshWarmPoolProgress } from "./instancerefreshwarmpoolprogress";
/**
 * Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
 */
export declare class InstanceRefreshProgressDetails extends SpeakeasyBase {
    livePoolProgress?: InstanceRefreshLivePoolProgress;
    warmPoolProgress?: InstanceRefreshWarmPoolProgress;
}
