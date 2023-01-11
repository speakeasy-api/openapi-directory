import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum LabOrderDocumentTypeEnum {
    Req = "REQ",
    Abn = "ABN",
    RA = "R-A",
    Res = "RES"
}


export class LabOrderDocument extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document" })
  document: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=lab_order" })
  labOrder: number;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: LabOrderDocumentTypeEnum;
}
