import { SpeakeasyBase } from "../../../internal/utils";
export declare class PatientPhysicalExam extends SpeakeasyBase {
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
