import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
import { BrowserTypeEnum } from "./browsertypeenum";
import { PortalStatusEnum } from "./portalstatusenum";
import { RendererTypeEnum } from "./renderertypeenum";
/**
 * The summary of the portal.
 */
export declare class PortalSummary extends SpeakeasyBase {
    authenticationType?: AuthenticationTypeEnum;
    browserSettingsArn?: string;
    browserType?: BrowserTypeEnum;
    creationDate?: Date;
    displayName?: string;
    networkSettingsArn?: string;
    portalArn?: string;
    portalEndpoint?: string;
    portalStatus?: PortalStatusEnum;
    rendererType?: RendererTypeEnum;
    trustStoreArn?: string;
    userAccessLoggingSettingsArn?: string;
    userSettingsArn?: string;
}
