import { SpeakeasyBase } from "../../../internal/utils";
export declare class LabOrderIcd10Code extends SpeakeasyBase {
    /**
     * The numeric ICD-10 code
     */
    code?: string;
    /**
     * Short description  of the ICD-10 code
     */
    description?: string;
}
/**
 * `"Normal"` or `"STAT"`. Default `"Normal"`
 */
export declare enum LabOrderPriorityEnum {
    N = "N",
    S = "S"
}
/**
 * Created
 */
export declare class LabOrder extends SpeakeasyBase {
    /**
     * For external use only
     */
    accessionNumber?: string;
    doctor: number;
    /**
     * Associated `/lab_documents` objects
     */
    documents?: string[];
    /**
     * ICD-10 codes of the conditions which the tests concerns.
     */
    icd10Codes?: LabOrderIcd10Code[];
    id?: number;
    notes?: string;
    patient: number;
    /**
     * `"Normal"` or `"STAT"`. Default `"Normal"`
     */
    priority?: LabOrderPriorityEnum;
    /**
     * The ID printed on the requisition PDF. Generally the same as id.
     */
    requisitionId?: string;
    /**
     * Equivalent to HL7's ORC.5. Defaults to `"N"`.
     *
     * @remarks
     * Value | Notes
     * ----- | -----
     * `"N"` | not sent                                          |
     * `"Q"` | queued for processing                             |
     * `"A"` | `ABN (Advance Beneficiary Notice)` required       |
     * `"S"` | send                                              |
     * `"R"` | results received                                  |
     * `"E"` | error                                             |
     *
     */
    status?: string;
    sublab: number;
    /**
     * Time at which the order was submitted. Defaults to now
     */
    timestamp?: string;
}
