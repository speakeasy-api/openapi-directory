import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ErrorT extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=help" })
  help?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=phrase" })
  phrase?: string;
}
