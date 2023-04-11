import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Either `9` or `10`. If omitted in writing, default to 10.
 */
export declare enum PatientProblemIcdVersionEnum {
    Nine = "9",
    Ten = "10"
}
/**
 * Either `active`, `inactive` or `resolved`. If omitted in writing, default to `active`
 */
export declare enum PatientProblemStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Resolved = "resolved"
}
/**
 * Created
 */
export declare class PatientProblem extends SpeakeasyBase {
    dateChanged?: string;
    dateDiagnosis?: string;
    dateOnset?: string;
    description?: string;
    doctor: number;
    /**
     * ICD9 or ICD10 code for the problem
     */
    icdCode?: string;
    /**
     * Either `9` or `10`. If omitted in writing, default to 10.
     */
    icdVersion?: PatientProblemIcdVersionEnum;
    id?: number;
    /**
     * External URL with more information about the problem, intended for patient education
     */
    infoUrl?: string;
    /**
     * Name of the problem
     */
    name?: string;
    /**
     * Any additional notes by the provider
     */
    notes?: string;
    patient: number;
    /**
     * SnoMED code for the problem
     */
    snomedCtCode?: string;
    /**
     * Either `active`, `inactive` or `resolved`. If omitted in writing, default to `active`
     */
    status?: PatientProblemStatusEnum;
}
