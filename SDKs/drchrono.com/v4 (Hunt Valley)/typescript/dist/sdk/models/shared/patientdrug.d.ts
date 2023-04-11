import { SpeakeasyBase } from "../../../internal/utils";
/**
 * One of `""`, `"Ordered"`, `"Administered during visit"`, `"Electronic eRx Sent"`, `"Phoned into Pharmacy"`, `"Faxed to Pharmacy"`, `"Paper Rx"`, `"Prescription Printed"`, `"Discontinued"`, `"Prescribed by other Dr"` or `"Over the Counter"`. If omitted in writing, default to `""`
 */
export declare enum PatientDrugOrderStatusEnum {
    Unknown = "",
    Ordered = "Ordered",
    AdministeredDuringVisit = "Administered during visit",
    ElectronicERxSent = "Electronic eRx Sent",
    PhonedIntoPharmacy = "Phoned into Pharmacy",
    FaxedToPharmacy = "Faxed to Pharmacy",
    PaperRx = "Paper Rx",
    PrescriptionPrinted = "Prescription Printed",
    Discontinued = "Discontinued",
    PrescribedByOtherDr = "Prescribed by other Dr",
    OverTheCounter = "Over the Counter"
}
/**
 * If present, one of `"active"` or `"inactive"`. If omitted in writing, default to `"active"`
 */
export declare enum PatientDrugStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
/**
 * Created
 */
export declare class PatientDrug extends SpeakeasyBase {
    /**
     * Appointment ID corresponding to the initial prescription
     */
    appointment?: number;
    datePrescribed?: string;
    dateStartedTaking?: string;
    dateStoppedTaking?: string;
    /**
     * If true, the prescription should be dispensed as written and not substituted
     */
    daw?: boolean;
    dispenseQuantity?: number;
    /**
     * Prescribing doctor ID
     */
    doctor: number;
    /**
     * Please note, this used to be an decimal field, you can still pass decimal value to it. Or you can pass in some formatted string if needed.
     */
    dosageQuantity?: string;
    dosageUnits?: string;
    /**
     * Frequency pf administration
     */
    frequency?: string;
    id?: number;
    indication?: string;
    name?: string;
    ndc?: string;
    /**
     * Any additional notes from the provider
     */
    notes?: string;
    numberRefills?: number;
    /**
     * One of `""`, `"Ordered"`, `"Administered during visit"`, `"Electronic eRx Sent"`, `"Phoned into Pharmacy"`, `"Faxed to Pharmacy"`, `"Paper Rx"`, `"Prescription Printed"`, `"Discontinued"`, `"Prescribed by other Dr"` or `"Over the Counter"`. If omitted in writing, default to `""`
     */
    orderStatus?: PatientDrugOrderStatusEnum;
    patient: number;
    pharmacyNote?: string;
    /**
     * If `True`, the medication should be taken when necessary
     */
    prn?: boolean;
    /**
     * Route of administration
     */
    route?: string;
    /**
     * RxNorm code for the medication
     */
    rxnorm?: string;
    signatureNote?: string;
    /**
     * If present, one of `"active"` or `"inactive"`. If omitted in writing, default to `"active"`
     */
    status?: PatientDrugStatusEnum;
}
