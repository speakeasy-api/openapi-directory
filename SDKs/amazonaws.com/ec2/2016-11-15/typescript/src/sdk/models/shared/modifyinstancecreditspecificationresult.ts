import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyInstanceCreditSpecificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  successfulInstanceCreditSpecifications?: Record<string, any>;

  @SpeakeasyMetadata()
  unsuccessfulInstanceCreditSpecifications?: Record<string, any>;
}
