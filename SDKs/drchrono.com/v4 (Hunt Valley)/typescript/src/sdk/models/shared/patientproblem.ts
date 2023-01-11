import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientProblemIcdVersionEnum {
    Nine = "9",
    Ten = "10"
}

export enum PatientProblemStatusEnum {
    Active = "active",
    Inactive = "inactive",
    Resolved = "resolved"
}


export class PatientProblem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date_changed" })
  dateChanged?: string;

  @SpeakeasyMetadata({ data: "json, name=date_diagnosis" })
  dateDiagnosis?: string;

  @SpeakeasyMetadata({ data: "json, name=date_onset" })
  dateOnset?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=icd_code" })
  icdCode?: string;

  @SpeakeasyMetadata({ data: "json, name=icd_version" })
  icdVersion?: PatientProblemIcdVersionEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=info_url" })
  infoUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=snomed_ct_code" })
  snomedCtCode?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PatientProblemStatusEnum;
}
