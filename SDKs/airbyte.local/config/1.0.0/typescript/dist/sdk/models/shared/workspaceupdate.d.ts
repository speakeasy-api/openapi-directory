import { SpeakeasyBase } from "../../../internal/utils";
import { GeographyEnum } from "./geographyenum";
import { Notification } from "./notification";
import { WebhookConfigWrite } from "./webhookconfigwrite";
/**
 * Used to apply a patch-style update to a workspace, which means that null properties remain unchanged
 */
export declare class WorkspaceUpdate extends SpeakeasyBase {
    anonymousDataCollection?: boolean;
    defaultGeography?: GeographyEnum;
    displaySetupWizard?: boolean;
    email?: string;
    initialSetupComplete?: boolean;
    news?: boolean;
    notifications?: Notification[];
    securityUpdates?: boolean;
    webhookConfigs?: WebhookConfigWrite[];
    workspaceId: string;
}
