import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
/**
 * Specifies the settings for a one-time message that's sent directly to an endpoint through the GCM channel. The GCM channel enables Amazon Pinpoint to send messages to the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
 */
export declare class GCMMessage extends SpeakeasyBase {
    action?: ActionEnum;
    body?: string;
    collapseKey?: string;
    data?: Record<string, string>;
    iconReference?: string;
    imageIconUrl?: string;
    imageUrl?: string;
    priority?: string;
    rawContent?: string;
    restrictedPackageName?: string;
    silentPush?: boolean;
    smallImageIconUrl?: string;
    sound?: string;
    substitutions?: Record<string, string[]>;
    timeToLive?: number;
    title?: string;
    url?: string;
}
