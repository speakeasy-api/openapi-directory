import { SpeakeasyBase } from "../../../internal/utils";
import { MessageTypeEnum } from "./messagetypeenum";
/**
 * Success
 */
export declare class DeleteDefaultMessageTypeResult extends SpeakeasyBase {
    configurationSetArn?: string;
    configurationSetName?: string;
    messageType?: MessageTypeEnum;
}
