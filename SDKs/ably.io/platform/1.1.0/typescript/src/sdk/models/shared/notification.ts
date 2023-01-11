import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Notification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=collapseKey" })
  collapseKey?: string;

  @SpeakeasyMetadata({ data: "json, name=icon" })
  icon?: string;

  @SpeakeasyMetadata({ data: "json, name=sound" })
  sound?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
