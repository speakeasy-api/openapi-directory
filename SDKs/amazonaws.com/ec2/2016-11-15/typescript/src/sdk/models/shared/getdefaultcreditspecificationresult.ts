import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
/** 
 * The default credit option for CPU usage of the instance family.
**/
export class GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceFamily?: Record<string, any>;
}


export class GetDefaultCreditSpecificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceFamilyCreditSpecification?: GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification;
}
