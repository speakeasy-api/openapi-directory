import { SpeakeasyBase } from "../../../internal/utils";
import { CompositeSlotTypeSetting } from "./compositeslottypesetting";
import { ExternalSourceSetting } from "./externalsourcesetting";
import { SlotTypeValue } from "./slottypevalue";
import { SlotValueSelectionSetting } from "./slotvalueselectionsetting";
/**
 * Success
 */
export declare class UpdateSlotTypeResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    compositeSlotTypeSetting?: CompositeSlotTypeSetting;
    creationDateTime?: Date;
    description?: string;
    /**
     * Provides information about the external source of the slot type's definition.
     */
    externalSourceSetting?: ExternalSourceSetting;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    parentSlotTypeSignature?: string;
    slotTypeId?: string;
    slotTypeName?: string;
    slotTypeValues?: SlotTypeValue[];
    valueSelectionSetting?: SlotValueSelectionSetting;
}
