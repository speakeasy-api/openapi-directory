import { SpeakeasyBase } from "../../../internal/utils";
import { UserEMailSettingLocalization } from "./useremailsettinglocalization";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
export declare class UserEmailViewDefinitionSetting extends SpeakeasyBase {
    /**
     * A dictionary of localized text for the EMail setting, keyed by the locale.
     */
    localization?: Record<string, UserEMailSettingLocalization>;
    /**
     * The identifier for this UI Setting, which can be used to relate it to custom strings or other data as desired.
     */
    name?: string;
    /**
     * The OptInFlags value to set or clear if this setting is set or cleared in the UI. It is the aggregate of all underlying opt-in flags related to this setting.
     */
    optInAggregateValue?: number;
    /**
     * If true, this setting should be set by default if the user hasn't chosen whether it's set or cleared yet.
     */
    setByDefault?: boolean;
    /**
     * The subscriptions to show as children of this setting, if any.
     */
    subscriptions?: UserEmailSubscriptionDefinition[];
}
