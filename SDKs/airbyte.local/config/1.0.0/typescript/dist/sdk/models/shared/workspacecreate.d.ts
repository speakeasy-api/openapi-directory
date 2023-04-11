import { SpeakeasyBase } from "../../../internal/utils";
import { GeographyEnum } from "./geographyenum";
import { Notification } from "./notification";
import { WebhookConfigWrite } from "./webhookconfigwrite";
export declare class WorkspaceCreate extends SpeakeasyBase {
    anonymousDataCollection?: boolean;
    defaultGeography?: GeographyEnum;
    displaySetupWizard?: boolean;
    email?: string;
    name: string;
    news?: boolean;
    notifications?: Notification[];
    securityUpdates?: boolean;
    webhookConfigs?: WebhookConfigWrite[];
}
