import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
import { ContactChannelAddress } from "./contactchanneladdress";
export declare class CreateContactChannelRequest extends SpeakeasyBase {
    contactId: string;
    deferActivation?: boolean;
    deliveryAddress: ContactChannelAddress;
    idempotencyToken?: string;
    name: string;
    type: ChannelTypeEnum;
}
