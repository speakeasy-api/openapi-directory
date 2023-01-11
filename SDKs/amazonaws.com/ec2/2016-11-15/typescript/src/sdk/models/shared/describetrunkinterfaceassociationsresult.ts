import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeTrunkInterfaceAssociationsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  interfaceAssociations?: Record<string, any>;

  @SpeakeasyMetadata()
  nextToken?: Record<string, any>;
}
