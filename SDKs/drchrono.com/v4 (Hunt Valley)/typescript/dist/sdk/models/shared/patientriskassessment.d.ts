import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class PatientRiskAssessment extends SpeakeasyBase {
    code?: string;
    codeSystem?: string;
    createdAt?: string;
    doctor: number;
    effectiveTime?: string;
    id?: number;
    name?: string;
    patient: number;
    valueCode?: string;
    valueCodeSystem?: string;
    valueName?: string;
}
