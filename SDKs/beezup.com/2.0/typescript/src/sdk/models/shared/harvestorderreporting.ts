import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HarvestOrderReporting
/** 
 * The reporting related to a harvest order operation
**/
export class HarvestOrderReporting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beezUPForcedStatus" })
  beezUPForcedStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=beezUPStatus" })
  beezUPStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=creationUtcDate" })
  creationUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=executionUUID" })
  executionUUID?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUpdateUtcDate" })
  lastUpdateUtcDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=marketplaceStatus" })
  marketplaceStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=processingStatus" })
  processingStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=warningMessage" })
  warningMessage?: string;
}
