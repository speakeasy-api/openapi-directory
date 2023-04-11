import { SpeakeasyBase } from "../../../internal/utils";
import { EventSeverityEnum } from "./eventseverityenum";
/**
 * Request to retrieve a list of events for an environment.
 */
export declare class DescribeEventsMessage extends SpeakeasyBase {
    applicationName?: string;
    endTime?: Date;
    environmentId?: string;
    environmentName?: string;
    maxRecords?: number;
    nextToken?: string;
    platformArn?: string;
    requestId?: string;
    severity?: EventSeverityEnum;
    startTime?: Date;
    templateName?: string;
    versionLabel?: string;
}
