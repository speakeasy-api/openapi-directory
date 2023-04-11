import { SpeakeasyBase } from "../../../internal/utils";
import { DialogActionTypeEnum } from "./dialogactiontypeenum";
import { ElicitSubSlot } from "./elicitsubslot";
import { StyleTypeEnum } from "./styletypeenum";
/**
 * The next action that Amazon Lex V2 should take.
 */
export declare class DialogAction extends SpeakeasyBase {
    slotElicitationStyle?: StyleTypeEnum;
    slotToElicit?: string;
    subSlotToElicit?: ElicitSubSlot;
    type: DialogActionTypeEnum;
}
