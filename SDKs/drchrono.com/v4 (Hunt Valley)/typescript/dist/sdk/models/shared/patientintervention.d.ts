import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PatientIntervention extends SpeakeasyBase {
    /**
     * Code from different code system
     */
    code?: string;
    /**
     * Can be `SNOMEDCT`, `HCPCS`, `CPT`, `ICD10CM`
     */
    codeSystem?: string;
    createdAt?: string;
    doctor: number;
    effectiveTime?: string;
    id?: number;
    /**
     * Description of intervention
     */
    name?: string;
    patient: number;
    /**
     * Code from different code system represent intervention value
     */
    valueCode?: string;
    /**
     * Can be `SNOMEDCT`, `ICD10CM`, `LOINC`
     */
    valueCodeSystem?: string;
    /**
     * Description of value
     */
    valueName?: string;
}
