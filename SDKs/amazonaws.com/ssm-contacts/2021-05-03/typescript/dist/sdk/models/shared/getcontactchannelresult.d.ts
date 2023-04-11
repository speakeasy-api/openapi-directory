import { SpeakeasyBase } from "../../../internal/utils";
import { ActivationStatusEnum } from "./activationstatusenum";
import { ChannelTypeEnum } from "./channeltypeenum";
import { ContactChannelAddress } from "./contactchanneladdress";
/**
 * Success
 */
export declare class GetContactChannelResult extends SpeakeasyBase {
    activationStatus?: ActivationStatusEnum;
    contactArn: string;
    contactChannelArn: string;
    deliveryAddress: ContactChannelAddress;
    name: string;
    type: ChannelTypeEnum;
}
