import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
export declare class UpdateCampaignRequest extends SpeakeasyBase {
    campaignArn: string;
    campaignConfig?: CampaignConfig;
    minProvisionedTPS?: number;
    solutionVersionArn?: string;
}
