import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LabOrderIcd10Code extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;
}

export enum LabOrderPriorityEnum {
    N = "N",
    S = "S"
}


export class LabOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accession_number" })
  accessionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=documents" })
  documents?: string[];

  @SpeakeasyMetadata({ data: "json, name=icd10_codes", elemType: LabOrderIcd10Code })
  icd10Codes?: LabOrderIcd10Code[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=priority" })
  priority?: LabOrderPriorityEnum;

  @SpeakeasyMetadata({ data: "json, name=requisition_id" })
  requisitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=sublab" })
  sublab: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;
}
