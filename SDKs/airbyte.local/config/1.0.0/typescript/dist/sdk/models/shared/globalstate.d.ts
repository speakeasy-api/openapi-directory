import { SpeakeasyBase } from "../../../internal/utils";
import { StreamState } from "./streamstate";
export declare class GlobalState extends SpeakeasyBase {
    sharedState?: Record<string, any>;
    streamStates: StreamState[];
}
