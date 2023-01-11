import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PartnerIntegrationInfoList } from "./partnerintegrationinfolist";



export class DescribePartnersOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: PartnerIntegrationInfoList })
  partnerIntegrationInfoList?: PartnerIntegrationInfoList[];
}
