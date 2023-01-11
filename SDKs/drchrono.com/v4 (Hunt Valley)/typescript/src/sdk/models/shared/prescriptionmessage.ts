import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PrescriptionMessageMessageDirectionEnum {
    I = "I",
    O = "O"
}


export class PrescriptionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=json_data" })
  jsonData?: string;

  @SpeakeasyMetadata({ data: "json, name=message_direction" })
  messageDirection?: PrescriptionMessageMessageDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=message_status" })
  messageStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=message_type" })
  messageType?: string;

  @SpeakeasyMetadata({ data: "json, name=parent_message" })
  parentMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "json, name=pharmacy" })
  pharmacy?: string;
}
