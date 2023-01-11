import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutomaticTransition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;

  @SpeakeasyMetadata({ data: "json, name=orderStatusTransitionId" })
  orderStatusTransitionId: number;
}
