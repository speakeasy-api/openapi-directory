import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountSynchronization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "json, name=completedHarvestSynchroUtcDate" })
  completedHarvestSynchroUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=marketplaceBusinessCode" })
  marketplaceBusinessCode: string;

  @SpeakeasyMetadata({ data: "json, name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}
