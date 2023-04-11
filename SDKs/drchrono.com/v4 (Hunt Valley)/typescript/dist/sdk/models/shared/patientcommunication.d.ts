import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PatientCommunication extends SpeakeasyBase {
    /**
     * Code from different code system
     */
    code?: string;
    /**
     * Can be `SNOMEDCT`, `LOINC`
     */
    codeSystem?: string;
    createdAt?: string;
    doctor: number;
    effectiveTime?: string;
    id?: number;
    name?: string;
    patient: number;
    /**
     * Code from different code system represent communication value
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
