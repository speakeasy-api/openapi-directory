import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { NumberCapabilityEnum } from "./numbercapabilityenum";
import { RequestableNumberTypeEnum } from "./requestablenumbertypeenum";
import { Tag } from "./tag";
export declare class RequestPhoneNumberRequest extends SpeakeasyBase {
    clientToken?: string;
    deletionProtectionEnabled?: boolean;
    isoCountryCode: string;
    messageType: MessageTypeEnum;
    numberCapabilities: NumberCapabilityEnum[];
    numberType: RequestableNumberTypeEnum;
    optOutListName?: string;
    poolId?: string;
    registrationId?: string;
    tags?: Tag[];
}
