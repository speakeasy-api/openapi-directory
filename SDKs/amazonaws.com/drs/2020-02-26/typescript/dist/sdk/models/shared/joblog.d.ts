import { SpeakeasyBase } from "../../../internal/utils";
import { JobLogEventData } from "./joblogeventdata";
import { JobLogEventEnum } from "./joblogeventenum";
/**
 * A log outputted by a Job.
 */
export declare class JobLog extends SpeakeasyBase {
    event?: JobLogEventEnum;
    eventData?: JobLogEventData;
    logDateTime?: string;
}
