import { SpeakeasyBase } from "../../../internal/utils";
import { ActivationStatusEnum } from "./activationstatusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { ContactChannelAddress } from "./contactchanneladdress";
/**
 * The method that Incident Manager uses to engage a contact.
 */
export declare class ContactChannel extends SpeakeasyBase {
    activationStatus: ActivationStatusEnum;
    contactArn: string;
    contactChannelArn: string;
    deliveryAddress: ContactChannelAddress;
    name: string;
    type?: ChannelTypeEnum;
}
