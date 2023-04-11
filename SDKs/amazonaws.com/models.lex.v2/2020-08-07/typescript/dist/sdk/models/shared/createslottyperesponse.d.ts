import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeSlotTypeSetting } from "./compositeslottypesetting";
import { ExternalSourceSetting } from "./externalsourcesetting";
import { SlotTypeValue } from "./slottypevalue";
import { SlotValueSelectionSetting } from "./slotvalueselectionsetting";
/**
 * Success
 */
export declare class CreateSlotTypeResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    compositeSlotTypeSetting?: CompositeSlotTypeSetting;
    creationDateTime?: Date;
    description?: string;
    externalSourceSetting?: ExternalSourceSetting;
    localeId?: string;
    parentSlotTypeSignature?: string;
    slotTypeId?: string;
    slotTypeName?: string;
    slotTypeValues?: SlotTypeValue[];
    valueSelectionSetting?: SlotValueSelectionSetting;
}
