import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PatientProblemIcdVersionEnum {
    Nine = "9",
    Ten = "10"
}
export declare enum PatientProblemStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Resolved = "resolved"
}
export declare class PatientProblem extends SpeakeasyBase {
    dateChanged?: string;
    dateDiagnosis?: string;
    dateOnset?: string;
    description?: string;
    doctor: number;
    icdCode?: string;
    icdVersion?: PatientProblemIcdVersionEnum;
    id?: number;
    infoUrl?: string;
    name?: string;
    notes?: string;
    patient: number;
    snomedCtCode?: string;
    status?: PatientProblemStatusEnum;
}
