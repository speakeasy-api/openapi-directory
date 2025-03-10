import { SpeakeasyBase } from "../../../internal/utils";
import { DialogCodeHookSettings } from "./dialogcodehooksettings";
import { FulfillmentCodeHookSettings } from "./fulfillmentcodehooksettings";
import { InitialResponseSetting } from "./initialresponsesetting";
import { InputContext } from "./inputcontext";
import { IntentClosingSetting } from "./intentclosingsetting";
import { IntentConfirmationSetting } from "./intentconfirmationsetting";
import { KendraConfiguration } from "./kendraconfiguration";
import { OutputContext } from "./outputcontext";
import { SampleUtterance } from "./sampleutterance";
/**
 * Success
 */
export declare class CreateIntentResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    creationDateTime?: Date;
    description?: string;
    dialogCodeHook?: DialogCodeHookSettings;
    fulfillmentCodeHook?: FulfillmentCodeHookSettings;
    initialResponseSetting?: InitialResponseSetting;
    inputContexts?: InputContext[];
    intentClosingSetting?: IntentClosingSetting;
    intentConfirmationSetting?: IntentConfirmationSetting;
    intentId?: string;
    intentName?: string;
    kendraConfiguration?: KendraConfiguration;
    localeId?: string;
    outputContexts?: OutputContext[];
    parentIntentSignature?: string;
    sampleUtterances?: SampleUtterance[];
}
