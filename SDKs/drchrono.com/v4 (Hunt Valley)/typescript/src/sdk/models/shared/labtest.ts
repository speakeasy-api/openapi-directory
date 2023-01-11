import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LabTestStatusEnum {
    P = "P",
    I = "I",
    C = "C",
    F = "F",
    X = "X"
}


export class LabTest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=collection_date" })
  collectionDate?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=internal_notes" })
  internalNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=lab_order" })
  labOrder: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=report_notes" })
  reportNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=specimen_condition" })
  specimenCondition?: string;

  @SpeakeasyMetadata({ data: "json, name=specimen_source" })
  specimenSource?: string;

  @SpeakeasyMetadata({ data: "json, name=specimen_total_volume" })
  specimenTotalVolume?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: LabTestStatusEnum;
}
