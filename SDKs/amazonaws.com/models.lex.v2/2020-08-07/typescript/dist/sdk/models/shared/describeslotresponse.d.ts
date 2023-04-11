import { SpeakeasyBase } from "../../../internal/utils";
import { MultipleValuesSetting } from "./multiplevaluessetting";
import { ObfuscationSetting } from "./obfuscationsetting";
import { SlotValueElicitationSetting } from "./slotvalueelicitationsetting";
import { SubSlotSetting } from "./subslotsetting";
/**
 * Success
 */
export declare class DescribeSlotResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    intentId?: string;
    lastUpdatedDateTime?: Date;
    localeId?: string;
    multipleValuesSetting?: MultipleValuesSetting;
    obfuscationSetting?: ObfuscationSetting;
    slotId?: string;
    slotName?: string;
    slotTypeId?: string;
    subSlotSetting?: SubSlotSetting;
    valueElicitationSetting?: SlotValueElicitationSetting;
}
