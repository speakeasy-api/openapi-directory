import { SpeakeasyBase } from "../../../internal/utils";
export declare class PlanDetailsWebhookOptions extends SpeakeasyBase {
    amount?: number;
    includeTriggers?: string;
    restrictionTypes?: string[];
}
export declare class PlanDetails extends SpeakeasyBase {
    apiKeys?: number;
    apiTokens?: number;
    colorSchema?: boolean;
    customDomain?: boolean;
    customName?: boolean;
    directLinks?: boolean;
    ipWhitelist?: boolean;
    sharingOptions?: string[];
    sshKeys?: number;
    storageAddOn?: number;
    unlimitedUsers?: boolean;
    userExpiration?: boolean;
    userImport?: boolean;
    webhookOptions?: PlanDetailsWebhookOptions;
}
