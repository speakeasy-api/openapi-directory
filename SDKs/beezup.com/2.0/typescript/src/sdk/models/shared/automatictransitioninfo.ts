import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTransitionInfoLinks } from "./automatictransitioninfolinks";



export class AutomaticTransitionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=beezUPOrderStatus" })
  beezUPOrderStatus: string;

  @SpeakeasyMetadata({ data: "json, name=businessOperationType" })
  businessOperationType: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: AutomaticTransitionInfoLinks;

  @SpeakeasyMetadata({ data: "json, name=marketplaceBusinessCode" })
  marketplaceBusinessCode: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;

  @SpeakeasyMetadata({ data: "json, name=orderStatusTransitionId" })
  orderStatusTransitionId: number;
}
