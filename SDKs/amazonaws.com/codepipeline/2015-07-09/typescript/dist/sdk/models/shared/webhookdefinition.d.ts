import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookAuthConfiguration } from "./webhookauthconfiguration";
import { WebhookAuthenticationTypeEnum } from "./webhookauthenticationtypeenum";
import { WebhookFilterRule } from "./webhookfilterrule";
/**
 * Represents information about a webhook and its definition.
 */
export declare class WebhookDefinition extends SpeakeasyBase {
    authentication: WebhookAuthenticationTypeEnum;
    authenticationConfiguration: WebhookAuthConfiguration;
    filters: WebhookFilterRule[];
    name: string;
    targetAction: string;
    targetPipeline: string;
}
