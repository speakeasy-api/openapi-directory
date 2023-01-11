import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientDrugOrderStatusEnum {
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

export enum PatientDrugStatusEnum {
    Active = "active",
    Inactive = "inactive"
}


export class PatientDrug extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "json, name=date_prescribed" })
  datePrescribed?: string;

  @SpeakeasyMetadata({ data: "json, name=date_started_taking" })
  dateStartedTaking?: string;

  @SpeakeasyMetadata({ data: "json, name=date_stopped_taking" })
  dateStoppedTaking?: string;

  @SpeakeasyMetadata({ data: "json, name=daw" })
  daw?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dispense_quantity" })
  dispenseQuantity?: number;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=dosage_quantity" })
  dosageQuantity?: string;

  @SpeakeasyMetadata({ data: "json, name=dosage_units" })
  dosageUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=indication" })
  indication?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ndc" })
  ndc?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=number_refills" })
  numberRefills?: number;

  @SpeakeasyMetadata({ data: "json, name=order_status" })
  orderStatus?: PatientDrugOrderStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=pharmacy_note" })
  pharmacyNote?: string;

  @SpeakeasyMetadata({ data: "json, name=prn" })
  prn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: string;

  @SpeakeasyMetadata({ data: "json, name=rxnorm" })
  rxnorm?: string;

  @SpeakeasyMetadata({ data: "json, name=signature_note" })
  signatureNote?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PatientDrugStatusEnum;
}
