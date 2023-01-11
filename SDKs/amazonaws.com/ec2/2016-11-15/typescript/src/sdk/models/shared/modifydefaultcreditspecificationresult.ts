import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
/** 
 * The default credit option for CPU usage of the instance family.
**/
export class ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cpuCredits?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceFamily?: Record<string, any>;
}


export class ModifyDefaultCreditSpecificationResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  instanceFamilyCreditSpecification?: ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification;
}
