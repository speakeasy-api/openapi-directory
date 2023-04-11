import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the credit option for CPU usage of a burstable performance instance.
 */
export declare class ModifyInstanceCreditSpecificationRequestInstanceCreditSpecifications extends SpeakeasyBase {
    cpuCredits?: string;
    instanceId: string;
}
export declare class ModifyInstanceCreditSpecificationRequest extends SpeakeasyBase {
    clientToken?: string;
    dryRun?: boolean;
    instanceCreditSpecifications: ModifyInstanceCreditSpecificationRequestInstanceCreditSpecifications[];
}
