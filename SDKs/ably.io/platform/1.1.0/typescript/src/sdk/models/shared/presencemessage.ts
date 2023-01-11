import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Extras } from "./extras";


export enum PresenceMessageActionEnum {
    Absent = "ABSENT",
    Present = "PRESENT",
    Enter = "ENTER",
    Leave = "LEAVE",
    Update = "UPDATE"
}


export class PresenceMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: PresenceMessageActionEnum;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=connectionId" })
  connectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=extras" })
  extras?: Extras;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: number;
}
