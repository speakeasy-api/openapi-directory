import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionStateTypeEnum } from "./connectionstatetypeenum";
import { GlobalState } from "./globalstate";
import { StreamState } from "./streamstate";
/**
 * Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.
 */
export declare class ConnectionState extends SpeakeasyBase {
    connectionId: string;
    globalState?: GlobalState;
    state?: Record<string, any>;
    stateType: ConnectionStateTypeEnum;
    streamState?: StreamState[];
}
