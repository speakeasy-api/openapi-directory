import { SpeakeasyBase } from "../../../internal/utils";
import { AdvancedRecognitionSetting } from "./advancedrecognitionsetting";
import { SlotValueRegexFilter } from "./slotvalueregexfilter";
import { SlotValueResolutionStrategyEnum } from "./slotvalueresolutionstrategyenum";
/**
 * Contains settings used by Amazon Lex to select a slot value.
 */
export declare class SlotValueSelectionSetting extends SpeakeasyBase {
    advancedRecognitionSetting?: AdvancedRecognitionSetting;
    regexFilter?: SlotValueRegexFilter;
    resolutionStrategy: SlotValueResolutionStrategyEnum;
}
