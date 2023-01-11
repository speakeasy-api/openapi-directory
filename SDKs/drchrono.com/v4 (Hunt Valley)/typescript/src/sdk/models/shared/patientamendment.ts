import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatientAmendment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amendment_file" })
  amendmentFile: string;

  @SpeakeasyMetadata({ data: "json, name=amendment_name" })
  amendmentName: string;

  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;
}
