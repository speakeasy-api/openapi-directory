import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
import { Tag } from "./tag";
export declare class CreatePoolRequest extends SpeakeasyBase {
    clientToken?: string;
    deletionProtectionEnabled?: boolean;
    isoCountryCode: string;
    messageType: MessageTypeEnum;
    originationIdentity: string;
    tags?: Tag[];
}
