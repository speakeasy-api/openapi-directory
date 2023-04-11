import { SpeakeasyBase } from "../../../internal/utils";
import { SlotTypeCategoryEnum } from "./slottypecategoryenum";
/**
 * Provides summary information about a slot type.
 */
export declare class SlotTypeSummary extends SpeakeasyBase {
    description?: string;
    lastUpdatedDateTime?: Date;
    parentSlotTypeSignature?: string;
    slotTypeCategory?: SlotTypeCategoryEnum;
    slotTypeId?: string;
    slotTypeName?: string;
}
