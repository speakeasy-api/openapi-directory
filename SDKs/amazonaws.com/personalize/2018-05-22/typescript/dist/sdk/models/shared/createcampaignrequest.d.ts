import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
export declare class CreateCampaignRequest extends SpeakeasyBase {
    campaignConfig?: CampaignConfig;
    minProvisionedTPS?: number;
    name: string;
    solutionVersionArn: string;
}
