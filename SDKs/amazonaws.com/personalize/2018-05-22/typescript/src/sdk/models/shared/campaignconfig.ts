import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CampaignConfig
/** 
 * The configuration details of a campaign.
**/
export class CampaignConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemExplorationConfig" })
  itemExplorationConfig?: Record<string, string>;
}
