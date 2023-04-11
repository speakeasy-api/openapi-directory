import { SpeakeasyBase } from "../../../internal/utils";
/**
 * HL7 codified abnormal flag for the result.
 */
export declare enum PatientLabResultSetAbnormalFlagEnum {
    Unknown = "",
    L = "L",
    H = "H",
    Ll = "LL",
    Hh = "HH",
    LessThan = "<",
    GreaterThan = ">",
    N = "N",
    A = "A",
    Aa = "AA",
    Null = "null",
    U = "U",
    D = "D",
    B = "B",
    W = "W",
    S = "S",
    R = "R",
    I = "I",
    Ms = "MS",
    Vs = "VS"
}
/**
 * Status of the lab order.
 */
export declare enum PatientLabResultSetStatusEnum {
    Unknown = "",
    OrderEntered = "Order Entered",
    Discontinued = "Discontinued",
    InProgress = "In Progress",
    ResultsReceived = "Results Received",
    ResultsReviewedWithPatient = "Results Reviewed with Patient",
    PaperOrder = "Paper Order"
}
/**
 * Created
 */
export declare class PatientLabResultSet extends SpeakeasyBase {
    createdAt?: string;
    /**
     * Date of lab test.
     */
    dateTestPerformed?: string;
    /**
     * Comment from the doctor on lab result.
     */
    doctorComments?: string;
    /**
     * Check this box when the doctor has reviewed the lab result and taken appropriate action.
     */
    doctorSignoff?: boolean;
    id?: number;
    /**
     * HL7 codified abnormal flag for the result.
     */
    labAbnormalFlag?: PatientLabResultSetAbnormalFlagEnum;
    /**
     * Imported CCR document that contains lab results.
     */
    labImportedFromCcr?: string;
    labNormalRange?: string;
    labNormalRangeUnits?: string;
    /**
     * Status of the lab order.
     */
    labOrderStatus?: PatientLabResultSetStatusEnum;
    labResultValue?: string;
    labResultValueAsFloat?: number;
    labResultValueUnits?: string;
    loincCode?: string;
    orderingDoctor: number;
    patient: number;
    /**
     * Scanned in PDF for this lab result (optional).
     */
    scannedInResult?: string;
    title?: string;
    updatedAt?: string;
}
