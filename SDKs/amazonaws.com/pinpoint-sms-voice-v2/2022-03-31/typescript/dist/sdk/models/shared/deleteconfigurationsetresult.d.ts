import { SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Success
 */
export declare class DeleteConfigurationSetResult extends SpeakeasyBase {
    configurationSetArn?: string;
    configurationSetName?: string;
    createdTimestamp?: Date;
    defaultMessageType?: MessageTypeEnum;
    defaultSenderId?: string;
    eventDestinations?: EventDestination[];
}
