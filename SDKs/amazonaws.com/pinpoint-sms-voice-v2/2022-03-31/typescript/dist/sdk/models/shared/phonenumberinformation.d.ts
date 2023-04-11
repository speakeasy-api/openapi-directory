import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { NumberCapabilityEnum } from "./numbercapabilityenum";
import { NumberStatusEnum } from "./numberstatusenum";
import { NumberTypeEnum } from "./numbertypeenum";
/**
 * The information for a phone number in an Amazon Web Services account.
 */
export declare class PhoneNumberInformation extends SpeakeasyBase {
    createdTimestamp: Date;
    deletionProtectionEnabled: boolean;
    isoCountryCode: string;
    messageType: MessageTypeEnum;
    monthlyLeasingPrice: string;
    numberCapabilities: NumberCapabilityEnum[];
    numberType: NumberTypeEnum;
    optOutListName: string;
    phoneNumber: string;
    phoneNumberArn: string;
    phoneNumberId?: string;
    poolId?: string;
    selfManagedOptOutsEnabled: boolean;
    status: NumberStatusEnum;
    twoWayChannelArn?: string;
    twoWayEnabled: boolean;
}
