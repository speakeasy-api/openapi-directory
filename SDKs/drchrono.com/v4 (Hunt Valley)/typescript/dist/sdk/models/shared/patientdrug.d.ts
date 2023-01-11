import { SpeakeasyBase } from "../../../internal/utils";
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
export declare enum PatientDrugStatusEnum {
    Active = "active",
    Inactive = "inactive"
}
export declare class PatientDrug extends SpeakeasyBase {
    appointment?: number;
    datePrescribed?: string;
    dateStartedTaking?: string;
    dateStoppedTaking?: string;
    daw?: boolean;
    dispenseQuantity?: number;
    doctor: number;
    dosageQuantity?: string;
    dosageUnits?: string;
    frequency?: string;
    id?: number;
    indication?: string;
    name?: string;
    ndc?: string;
    notes?: string;
    numberRefills?: number;
    orderStatus?: PatientDrugOrderStatusEnum;
    patient: number;
    pharmacyNote?: string;
    prn?: boolean;
    route?: string;
    rxnorm?: string;
    signatureNote?: string;
    status?: PatientDrugStatusEnum;
}
