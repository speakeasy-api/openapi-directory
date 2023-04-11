import { SpeakeasyBase } from "../../../internal/utils";
import { UserEmailSubscriptionDefinition } from "./useremailsubscriptiondefinition";
/**
 * Defines a single opt-in category: a wide-scoped permission to send emails for the subject related to the opt-in.
 */
export declare class UserEmailOptInDefinition extends SpeakeasyBase {
    /**
     * Information about the dependent subscriptions for this opt-in.
     */
    dependentSubscriptions?: UserEmailSubscriptionDefinition[];
    /**
     * The unique identifier for this opt-in category.
     */
    name?: string;
    /**
     * If true, this opt-in setting should be set by default in situations where accounts are created without explicit choices about what they're opting into.
     */
    setByDefault?: boolean;
    /**
     * The flag value for this opt-in category. For historical reasons, this is defined as a flags enum.
     */
    value?: number;
}
