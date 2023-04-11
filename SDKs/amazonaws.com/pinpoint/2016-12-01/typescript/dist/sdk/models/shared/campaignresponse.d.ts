import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignHook } from "./campaignhook";
import { CampaignLimits } from "./campaignlimits";
import { CampaignState } from "./campaignstate";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { TemplateConfiguration } from "./templateconfiguration";
import { TreatmentResource } from "./treatmentresource";
/**
 * Provides information about the status, configuration, and other settings for a campaign.
 */
export declare class CampaignResponse extends SpeakeasyBase {
    additionalTreatments?: TreatmentResource[];
    applicationId: string;
    arn: string;
    creationDate: string;
    customDeliveryConfiguration?: CustomDeliveryConfiguration;
    defaultState?: CampaignState;
    description?: string;
    holdoutPercent?: number;
    hook?: CampaignHook;
    id: string;
    isPaused?: boolean;
    lastModifiedDate: string;
    limits?: CampaignLimits;
    messageConfiguration?: MessageConfiguration;
    name?: string;
    priority?: number;
    schedule?: Schedule;
    segmentId: string;
    segmentVersion: number;
    state?: CampaignState;
    templateConfiguration?: TemplateConfiguration;
    treatmentDescription?: string;
    treatmentName?: string;
    version?: number;
    tags?: Record<string, string>;
}
