import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The instance family.
 */
export declare enum ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecificationInstanceFamilyEnum {
    T2 = "t2",
    T3 = "t3",
    T3a = "t3a",
    T4g = "t4g"
}
/**
 * The default credit option for CPU usage of the instance family.
 */
export declare class ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification extends SpeakeasyBase {
    cpuCredits?: string;
    instanceFamily?: ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecificationInstanceFamilyEnum;
}
/**
 * Success
 */
export declare class ModifyDefaultCreditSpecificationResult extends SpeakeasyBase {
    instanceFamilyCreditSpecification?: ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification;
}
