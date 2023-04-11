import { SpeakeasyBase } from "../../../internal/utils";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
/**
 *  Defines the action that the bot executes at runtime when the conversation reaches this step.
 */
export declare class DialogAction extends SpeakeasyBase {
    slotToElicit?: string;
    suppressNextMessage?: boolean;
    type: DialogActionTypeEnum;
}
