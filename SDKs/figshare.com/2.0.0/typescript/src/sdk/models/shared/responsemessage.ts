import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}
