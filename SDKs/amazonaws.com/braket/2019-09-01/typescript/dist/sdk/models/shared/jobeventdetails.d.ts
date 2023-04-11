import { SpeakeasyBase } from "../../../internal/utils";
import { JobEventTypeEnum } from "./jobeventtypeenum";
/**
 * Details about the type and time events occurred related to the Amazon Braket job.
 */
export declare class JobEventDetails extends SpeakeasyBase {
    eventType?: JobEventTypeEnum;
    message?: string;
    timeOfEvent?: Date;
}
