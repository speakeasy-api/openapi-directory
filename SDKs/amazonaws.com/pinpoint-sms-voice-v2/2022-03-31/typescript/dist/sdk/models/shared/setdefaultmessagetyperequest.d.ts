import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
export declare class SetDefaultMessageTypeRequest extends SpeakeasyBase {
    configurationSetName: string;
    messageType: MessageTypeEnum;
}
