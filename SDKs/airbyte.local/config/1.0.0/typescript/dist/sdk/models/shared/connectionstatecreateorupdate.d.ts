import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionState } from "./connectionstate";
export declare class ConnectionStateCreateOrUpdate extends SpeakeasyBase {
    connectionId: string;
    /**
     * Contains the state for a connection. The stateType field identifies what type of state it is. Only the field corresponding to that type will be set, the rest will be null. If stateType=not_set, then none of the fields will be set.
     */
    connectionState: ConnectionState;
}
