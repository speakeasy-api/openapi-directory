import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The default credit option for CPU usage of the instance family.
**/
export declare class ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification extends SpeakeasyBase {
    cpuCredits?: Record<string, any>;
    instanceFamily?: Record<string, any>;
}
export declare class ModifyDefaultCreditSpecificationResult extends SpeakeasyBase {
    instanceFamilyCreditSpecification?: ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification;
}
