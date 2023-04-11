import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStateEnum } from "./replicationstateenum";
/**
 * Endpoints can replicate all events to the secondary Region.
 */
export declare class ReplicationConfig extends SpeakeasyBase {
    state?: ReplicationStateEnum;
}
