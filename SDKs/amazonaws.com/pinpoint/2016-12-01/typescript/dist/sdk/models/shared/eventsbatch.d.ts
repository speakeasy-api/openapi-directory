import { SpeakeasyBase } from "../../../internal/utils";
import { Event } from "./event";
import { PublicEndpoint } from "./publicendpoint";
/**
 * Specifies a batch of endpoints and events to process.
 */
export declare class EventsBatch extends SpeakeasyBase {
    endpoint: PublicEndpoint;
    events: Record<string, Event>;
}
