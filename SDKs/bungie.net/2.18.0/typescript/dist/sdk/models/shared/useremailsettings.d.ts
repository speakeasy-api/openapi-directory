import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmailOptInDefinition } from "./useremailoptindefinition";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
import { UserEmailViewDefinition } from "./useremailviewdefinition";
/**
 * The set of all email subscription/opt-in settings and definitions.
 */
export declare class UserEmailSettings extends SpeakeasyBase {
    /**
     * Keyed by the name identifier of the opt-in definition.
     */
    optInDefinitions?: Record<string, UserEmailOptInDefinition>;
    /**
     * Keyed by the name identifier of the Subscription definition.
     */
    subscriptionDefinitions?: Record<string, UserEmailSubscriptionDefinition>;
    /**
     * Keyed by the name identifier of the View definition.
     */
    views?: Record<string, UserEmailViewDefinition>;
}
