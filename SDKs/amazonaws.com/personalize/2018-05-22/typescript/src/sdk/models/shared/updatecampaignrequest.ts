import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CampaignConfig } from "./campaignconfig";



export class UpdateCampaignRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=campaignArn" })
  campaignArn: string;

  @SpeakeasyMetadata({ data: "json, name=campaignConfig" })
  campaignConfig?: CampaignConfig;

  @SpeakeasyMetadata({ data: "json, name=minProvisionedTPS" })
  minProvisionedTPS?: number;

  @SpeakeasyMetadata({ data: "json, name=solutionVersionArn" })
  solutionVersionArn?: string;
}
