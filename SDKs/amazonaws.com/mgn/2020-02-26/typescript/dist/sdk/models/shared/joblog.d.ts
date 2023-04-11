import { SpeakeasyBase } from "../../../internal/utils";
import { JobLogEventData } from "./joblogeventdata";
import { JobLogEventEnum } from "./joblogeventenum";
/**
 * Job log.
 */
export declare class JobLog extends SpeakeasyBase {
    event?: JobLogEventEnum;
    eventData?: JobLogEventData;
    logDateTime?: string;
}
