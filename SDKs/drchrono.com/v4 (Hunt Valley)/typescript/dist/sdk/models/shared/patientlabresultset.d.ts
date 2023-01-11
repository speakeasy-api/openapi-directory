import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum PatientLabResultSetStatusEnum {
    Unknown = "",
    OrderEntered = "Order Entered",
    Discontinued = "Discontinued",
    InProgress = "In Progress",
    ResultsReceived = "Results Received",
    ResultsReviewedWithPatient = "Results Reviewed with Patient",
    PaperOrder = "Paper Order"
}
export declare class PatientLabResultSet extends SpeakeasyBase {
    createdAt?: string;
    dateTestPerformed?: string;
    doctorComments?: string;
    doctorSignoff?: boolean;
    id?: number;
    labAbnormalFlag?: PatientLabResultSetAbnormalFlagEnum;
    labImportedFromCcr?: string;
    labNormalRange?: string;
    labNormalRangeUnits?: string;
    labOrderStatus?: PatientLabResultSetStatusEnum;
    labResultValue?: string;
    labResultValueAsFloat?: number;
    labResultValueUnits?: string;
    loincCode?: string;
    orderingDoctor: number;
    patient: number;
    scannedInResult?: string;
    title?: string;
    updatedAt?: string;
}
