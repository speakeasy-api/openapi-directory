import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { NumberCapabilityEnum } from "./numbercapabilityenum";
import { NumberStatusEnum } from "./numberstatusenum";
import { RequestableNumberTypeEnum } from "./requestablenumbertypeenum";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class RequestPhoneNumberResult extends SpeakeasyBase {
    createdTimestamp?: Date;
    deletionProtectionEnabled?: boolean;
    isoCountryCode?: string;
    messageType?: MessageTypeEnum;
    monthlyLeasingPrice?: string;
    numberCapabilities?: NumberCapabilityEnum[];
    numberType?: RequestableNumberTypeEnum;
    optOutListName?: string;
    phoneNumber?: string;
    phoneNumberArn?: string;
    phoneNumberId?: string;
    poolId?: string;
    selfManagedOptOutsEnabled?: boolean;
    status?: NumberStatusEnum;
    tags?: Tag[];
    twoWayChannelArn?: string;
    twoWayEnabled?: boolean;
}
