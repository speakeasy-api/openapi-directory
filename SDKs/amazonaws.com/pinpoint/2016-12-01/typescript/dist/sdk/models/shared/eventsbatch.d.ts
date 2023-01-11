import { SpeakeasyBase } from "../../../internal/utils";
import { PublicEndpoint } from "./publicendpoint";
import { Event } from "./event";
export declare class EventsBatch extends SpeakeasyBase {
    endpoint?: PublicEndpoint;
    events?: Record<string, Event>;
}
