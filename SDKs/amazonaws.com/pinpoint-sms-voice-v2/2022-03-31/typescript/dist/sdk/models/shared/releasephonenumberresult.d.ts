import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { NumberCapabilityEnum } from "./numbercapabilityenum";
import { NumberStatusEnum } from "./numberstatusenum";
import { NumberTypeEnum } from "./numbertypeenum";
/**
 * Success
 */
export declare class ReleasePhoneNumberResult extends SpeakeasyBase {
    createdTimestamp?: Date;
    isoCountryCode?: string;
    messageType?: MessageTypeEnum;
    monthlyLeasingPrice?: string;
    numberCapabilities?: NumberCapabilityEnum[];
    numberType?: NumberTypeEnum;
    optOutListName?: string;
    phoneNumber?: string;
    phoneNumberArn?: string;
    phoneNumberId?: string;
    selfManagedOptOutsEnabled?: boolean;
    status?: NumberStatusEnum;
    twoWayChannelArn?: string;
    twoWayEnabled?: boolean;
}
