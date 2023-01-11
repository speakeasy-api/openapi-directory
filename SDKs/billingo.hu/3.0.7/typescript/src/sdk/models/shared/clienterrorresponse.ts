import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ClientError } from "./clienterror";



export class ClientErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: ClientError;
}
