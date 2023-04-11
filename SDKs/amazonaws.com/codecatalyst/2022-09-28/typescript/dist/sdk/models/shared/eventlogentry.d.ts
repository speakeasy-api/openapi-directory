import { SpeakeasyBase } from "../../../internal/utils";
import { EventPayload } from "./eventpayload";
import { OperationTypeEnum } from "./operationtypeenum";
import { ProjectInformation } from "./projectinformation";
import { UserIdentity } from "./useridentity";
/**
 * Information about an entry in an event log of Amazon CodeCatalyst activity.
 */
export declare class EventLogEntry extends SpeakeasyBase {
    errorCode?: string;
    eventCategory: string;
    eventName: string;
    eventSource: string;
    eventTime: Date;
    eventType: string;
    id: string;
    operationType: OperationTypeEnum;
    projectInformation?: ProjectInformation;
    requestId?: string;
    requestPayload?: EventPayload;
    responsePayload?: EventPayload;
    sourceIpAddress?: string;
    userAgent?: string;
    userIdentity: UserIdentity;
}
