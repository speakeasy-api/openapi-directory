import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerIntegrationStatusEnum } from "./partnerintegrationstatusenum";



// PartnerIntegrationInfoList
/** 
 * Describes a partner integration.
**/
export class PartnerIntegrationInfoList extends SpeakeasyBase {
  @SpeakeasyMetadata()
  createdAt?: Date;

  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  partnerName?: string;

  @SpeakeasyMetadata()
  status?: PartnerIntegrationStatusEnum;

  @SpeakeasyMetadata()
  statusMessage?: string;

  @SpeakeasyMetadata()
  updatedAt?: Date;
}
