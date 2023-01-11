import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DoctorMessageMessageNote
/** 
 * Additional note
**/
export class DoctorMessageMessageNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}

export enum DoctorMessageTypeEnum {
    Gp = "GP",
    Gc = "GC",
    Gt = "GT",
    Gz = "GZ",
    If = "IF",
    Of = "OF",
    Il = "IL",
    Ir = "IR",
    Or = "OR",
    Ie = "IE",
    Oa = "OA",
    Po = "PO",
    Pi = "PI",
    Pm = "PM",
    Oo = "OO",
    Od = "OD",
    Id = "ID",
    Dl = "DL",
    Cn = "CN"
}


export class DoctorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=attachment" })
  attachment?: string;

  @SpeakeasyMetadata({ data: "json, name=doctor" })
  doctor: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=message_notes", elemType: DoctorMessageMessageNote })
  messageNotes?: DoctorMessageMessageNote[];

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: string;

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: number;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=received_at" })
  receivedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=responsible_user" })
  responsibleUser?: string;

  @SpeakeasyMetadata({ data: "json, name=starred" })
  starred?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DoctorMessageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=workflow_step" })
  workflowStep?: string;
}
