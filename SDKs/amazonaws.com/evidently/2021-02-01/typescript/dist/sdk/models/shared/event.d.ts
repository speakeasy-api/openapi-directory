import { SpeakeasyBase } from "../../../internal/utils";
import { EventTypeEnum } from "./eventtypeenum";
/**
 * A structure that contains the information about one evaluation event or custom event sent to Evidently. This is a JSON payload. If this event specifies a pre-defined event type, the payload must follow the defined event schema.
 */
export declare class Event extends SpeakeasyBase {
    data: string;
    timestamp: Date;
    type: EventTypeEnum;
}
