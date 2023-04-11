import { SpeakeasyBase } from "../../../internal/utils";
import { GeographyEnum } from "./geographyenum";
import { Notification } from "./notification";
import { WebhookConfigRead } from "./webhookconfigread";
/**
 * Successful operation
 */
export declare class WorkspaceRead extends SpeakeasyBase {
    anonymousDataCollection?: boolean;
    customerId: string;
    defaultGeography?: GeographyEnum;
    displaySetupWizard?: boolean;
    email?: string;
    feedbackDone?: boolean;
    firstCompletedSync?: boolean;
    initialSetupComplete: boolean;
    name: string;
    news?: boolean;
    notifications?: Notification[];
    securityUpdates?: boolean;
    slug: string;
    webhookConfigs?: WebhookConfigRead[];
    workspaceId: string;
}
