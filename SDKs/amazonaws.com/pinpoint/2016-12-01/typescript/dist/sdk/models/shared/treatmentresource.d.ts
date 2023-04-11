import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignState } from "./campaignstate";
import { CustomDeliveryConfiguration } from "./customdeliveryconfiguration";
import { MessageConfiguration } from "./messageconfiguration";
import { Schedule } from "./schedule";
import { TemplateConfiguration } from "./templateconfiguration";
/**
 * Specifies the settings for a campaign treatment. A <i>treatment</i> is a variation of a campaign that's used for A/B testing of a campaign.
 */
export declare class TreatmentResource extends SpeakeasyBase {
    customDeliveryConfiguration?: CustomDeliveryConfiguration;
    id: string;
    messageConfiguration?: MessageConfiguration;
    schedule?: Schedule;
    sizePercent: number;
    state?: CampaignState;
    templateConfiguration?: TemplateConfiguration;
    treatmentDescription?: string;
    treatmentName?: string;
}
