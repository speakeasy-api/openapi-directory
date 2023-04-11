import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The browser settings resource that can be associated with a web portal. Once associated with a web portal, browser settings control how the browser will behave once a user starts a streaming session for the web portal.
 */
export declare class BrowserSettings extends SpeakeasyBase {
    associatedPortalArns?: string[];
    browserPolicy?: string;
    browserSettingsArn: string;
}
