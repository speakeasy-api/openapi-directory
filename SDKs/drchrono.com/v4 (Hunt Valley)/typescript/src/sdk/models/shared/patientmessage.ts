import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatientMessagePatientMessageAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}


export class PatientMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachments", elemType: PatientMessagePatientMessageAttachment })
  attachments?: PatientMessagePatientMessageAttachment[];

  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient: number;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
