import { SpeakeasyBase } from "../../../internal/utils";
import { EventDestination } from "./eventdestination";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Information related to a given configuration set in your Amazon Web Services account.
 */
export declare class ConfigurationSetInformation extends SpeakeasyBase {
    configurationSetArn: string;
    configurationSetName: string;
    createdTimestamp: Date;
    defaultMessageType?: MessageTypeEnum;
    defaultSenderId?: string;
    eventDestinations: EventDestination[];
}
