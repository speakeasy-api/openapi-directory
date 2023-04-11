import { SpeakeasyBase } from "../../../internal/utils";
import { InAppMessageBodyConfig } from "./inappmessagebodyconfig";
import { InAppMessageButton } from "./inappmessagebutton";
import { InAppMessageHeaderConfig } from "./inappmessageheaderconfig";
/**
 * The configuration for the message content.
 */
export declare class InAppMessageContent extends SpeakeasyBase {
    backgroundColor?: string;
    bodyConfig?: InAppMessageBodyConfig;
    headerConfig?: InAppMessageHeaderConfig;
    imageUrl?: string;
    primaryBtn?: InAppMessageButton;
    secondaryBtn?: InAppMessageButton;
}
