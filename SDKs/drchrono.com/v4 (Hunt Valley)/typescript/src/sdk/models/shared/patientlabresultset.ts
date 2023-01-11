import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientLabResultSetAbnormalFlagEnum {
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

export enum PatientLabResultSetStatusEnum {
    Unknown = "",
    OrderEntered = "Order Entered",
    Discontinued = "Discontinued",
    InProgress = "In Progress",
    ResultsReceived = "Results Received",
    ResultsReviewedWithPatient = "Results Reviewed with Patient",
    PaperOrder = "Paper Order"
}


export class PatientLabResultSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=date_test_performed" })
  dateTestPerformed?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor_comments" })
  doctorComments?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor_signoff" })
  doctorSignoff?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lab_abnormal_flag" })
  labAbnormalFlag?: PatientLabResultSetAbnormalFlagEnum;

  @SpeakeasyMetadata({ data: "json, name=lab_imported_from_ccr" })
  labImportedFromCcr?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_normal_range" })
  labNormalRange?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_normal_range_units" })
  labNormalRangeUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_order_status" })
  labOrderStatus?: PatientLabResultSetStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=lab_result_value" })
  labResultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_result_value_as_float" })
  labResultValueAsFloat?: number;

  @SpeakeasyMetadata({ data: "json, name=lab_result_value_units" })
  labResultValueUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=loinc_code" })
  loincCode?: string;

  @SpeakeasyMetadata({ data: "json, name=ordering_doctor" })
  orderingDoctor: number;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=scanned_in_result" })
  scannedInResult?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
