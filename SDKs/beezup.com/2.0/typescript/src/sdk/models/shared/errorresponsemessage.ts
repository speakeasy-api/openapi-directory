import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserErrorMessage } from "./usererrormessage";



export class ErrorResponseMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: UserErrorMessage })
  errors: UserErrorMessage[];
}
