import { SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";
import { Tag } from "./tag";
export declare class CreateCampaignRequest extends SpeakeasyBase {
    campaignConfig?: CampaignConfig;
    minProvisionedTPS?: number;
    name: string;
    solutionVersionArn: string;
    tags?: Tag[];
}
