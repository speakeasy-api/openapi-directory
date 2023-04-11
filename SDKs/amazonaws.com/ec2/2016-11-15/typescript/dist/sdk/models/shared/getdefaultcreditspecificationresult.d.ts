import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance family.
 */
export declare enum GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecificationInstanceFamilyEnum {
    T2 = "t2",
    T3 = "t3",
    T3a = "t3a",
    T4g = "t4g"
}
/**
 * The default credit option for CPU usage of the instance family.
 */
export declare class GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification extends SpeakeasyBase {
    cpuCredits?: string;
    instanceFamily?: GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecificationInstanceFamilyEnum;
}
/**
 * Success
 */
export declare class GetDefaultCreditSpecificationResult extends SpeakeasyBase {
    instanceFamilyCreditSpecification?: GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification;
}
