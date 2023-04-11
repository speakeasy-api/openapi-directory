import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Dictates a rule around whether the plug is enabled or insertable.
 *
 * @remarks
 * In practice, the live Destiny data will refer to these entries by index. You can then look up that index in the appropriate property (enabledRules or insertionRules) to get the localized string for the failure message if it failed.
 */
export declare class DestinyDefinitionsItemsDestinyPlugRuleDefinition extends SpeakeasyBase {
    /**
     * The localized string to show if this rule fails.
     */
    failureMessage?: string;
}
