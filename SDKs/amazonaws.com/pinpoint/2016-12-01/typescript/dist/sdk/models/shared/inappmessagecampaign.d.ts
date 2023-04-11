import { SpeakeasyBase } from "../../../internal/utils";
import { InAppCampaignSchedule } from "./inappcampaignschedule";
import { InAppMessage } from "./inappmessage";
/**
 * Targeted in-app message campaign.
 */
export declare class InAppMessageCampaign extends SpeakeasyBase {
    campaignId?: string;
    dailyCap?: number;
    inAppMessage?: InAppMessage;
    priority?: number;
    schedule?: InAppCampaignSchedule;
    sessionCap?: number;
    totalCap?: number;
    treatmentId?: string;
}
