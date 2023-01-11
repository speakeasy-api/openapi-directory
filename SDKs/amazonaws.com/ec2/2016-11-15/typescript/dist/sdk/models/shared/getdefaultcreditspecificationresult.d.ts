import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The default credit option for CPU usage of the instance family.
**/
export declare class GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification extends SpeakeasyBase {
    cpuCredits?: Record<string, any>;
    instanceFamily?: Record<string, any>;
}
export declare class GetDefaultCreditSpecificationResult extends SpeakeasyBase {
    instanceFamilyCreditSpecification?: GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification;
}
