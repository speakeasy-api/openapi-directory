import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServerError } from "./servererror";



export class ServerErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ServerError;
}
